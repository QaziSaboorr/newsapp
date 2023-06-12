const NewsItem = (props) => {
  let title = props.title;
  let description = props.description;
  let imageUrl = props.imageUrl;
  let newsUrl = props.newsUrl;
  let author = props.author;
  let date = props.date;
  let source = props.source;
  let x = new Date(date).toUTCString();

  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOct77YjX5hfAG_M0pRyTIumKuQy3glQhdwkAF_84b&s"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "85%", zIndex: 1 }}
          >
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>

          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "Unknown Author"} on {x}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={`${newsUrl}`}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
