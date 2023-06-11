import React, { Component } from "react";

export class NewsItem extends Component {
  title = this.props.title;
  description = this.props.description;
  imageUrl = this.props.imageUrl;
  newsUrl = this.props.newsUrl;
  author = this.props.author;
  date = this.props.date;
  source = this.props.source;
  x = new Date(this.date).toUTCString();
  render() {
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              this.imageUrl
                ? this.imageUrl
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOct77YjX5hfAG_M0pRyTIumKuQy3glQhdwkAF_84b&s"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <span
              className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
              style={{ left: "90%", zIndex: 1 }}
            >
              {this.source}
              <span className="visually-hidden">unread messages</span>
            </span>

            <h5 className="card-title">{this.title}...</h5>
            <p className="card-text">{this.description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {this.author ? this.author : "Unknown Author"} on {this.x}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={`${this.newsUrl}`}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
