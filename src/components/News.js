import NewsItem from "./NewsItem";
import Spin from "./Spin";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { useEffect } from "react";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) {
      return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pagesize=${props.pageSize}&page=${page}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(60);
    let parsedData = await data.json();
    props.setProgress(100);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    document.title = `${capitalize(props.category)} -  News Monkey`;
    updateNews();
    setPage(page + 1);
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pagesize=${props.pageSize}&page=${page}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(articles.length !== totalResults);
    setPage(page + 1);
    setLoading(false);
    setArticles(articles.concat(parsedData.articles));
  };

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "100px" }}>
        NewsMonkey - Top {capitalize(props.category)} Headlines
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spin />}
      >
        {loading === true ? (
          <Spin />
        ) : (
          <div className="container">
            <div className="row">
              {articles.map((elememnt) => {
                return (
                  <div className="col-md-4" key={elememnt.url}>
                    <NewsItem
                      title={elememnt.title ? elememnt.title : ""}
                      description={
                        elememnt.description ? elememnt.description : ""
                      }
                      imageUrl={elememnt.urlToImage}
                      newsUrl={elememnt.url}
                      author={elememnt.author}
                      date={elememnt.publishedAt}
                      source={elememnt.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "business",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
