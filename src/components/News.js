import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spin from "./Spin";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "business",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalize(this.props.category)} -  News Monkey`;
  }
  capitalize(str) {
    if (typeof str !== "string" || str.length === 0) {
      return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  async upodateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c1371e00e20f4e0e937b809d2a89f7ae&pagesize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    console.log(parsedData);
  }
  async componentDidMount() {
    this.upodateNews();
    this.setState({ page: this.state.page + 1 });
  }

  fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c1371e00e20f4e0e937b809d2a89f7ae&pagesize=${this.props.pageSize}&page=${this.state.page}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      loading: false,
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    // return this.state.loading === true ? (
    //   <Spin />
    // ) : (
    return (
      <>
        <h1 className="text-center">
          NewsMonkey - Top {this.capitalize(this.props.category)} Headlines
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spin />}
        >
          {this.state.loading ? (
            <Spin />
          ) : (
            <div className="container">
              <div className="row">
                {this.state.articles.map((elememnt) => {
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
  }
}

export default News;
