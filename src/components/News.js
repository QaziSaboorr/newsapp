import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spin from "./Spin";
import PropTypes from "prop-types";

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
    console.log(this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f8632db7e0fb43669773f1190a47f2a7&pagesize=${this.props.pageSize}&page=${this.state.page}`;
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
  }

  handlePrevClick = async () => {
    // this.setState({ articles: parsedData.articles });
    this.setState(
      {
        page: this.state.page - 1,
      },
      this.upodateNews
    );
  };
  handleNextClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=f8632db7e0fb43669773f1190a47f2a7&pagesize=${
    //   this.props.pageSize
    // }&page=${this.state.page + 1}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({ loading: false });
    // this.setState({ articles: parsedData.articles });
    this.setState(
      {
        page: this.state.page + 1,
      },
      this.upodateNews
    );
  };

  render() {
    return this.state.loading === true ? (
      <Spin />
    ) : (
      <div className="container my-3">
        <h1 className="text-center">
          NewsMonkey - Top {this.capitalize(this.props.category)} Headlines
        </h1>

        <div className="row">
          {this.state.articles.map((elememnt) => {
            return (
              <div className="col-md-4" key={elememnt.url}>
                <NewsItem
                  title={elememnt.title ? elememnt.title : ""}
                  description={elememnt.description ? elememnt.description : ""}
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
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
