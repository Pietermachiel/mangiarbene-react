import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

export default (props) => {
  var [thepost, setThePost] = useState([]);

  const API = props.match.params.id;
  const date = new Date(thepost.date);
  const parsedPostContent = ReactHtmlParser(thepost.content);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://mangiarbeneapi.roozen.nl/api/blog/${API}.json`
      );
      res.json().then((res) => setThePost(res));
    }
    getData();
  }, [API]);

  console.log("thepost");
  console.log(thepost);

  return (
    <React.Fragment>
      <div className="layout-blog">
        <h2>{thepost.title}</h2>
      </div>
      <p>
        <a
          className="pieterroozen"
          href="https://roozen.nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {thepost.author}
        </a>{" "}
        – {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
      </p>
      <div className="blog">
        <div className="blog-post kramdown">{parsedPostContent}</div>
      </div>
      <div className="blog-links">
        {thepost.book !== "" ? <p>book</p> : null}
        <Link to={`/books/${thepost.bookId}`}>
          <h5>{thepost.book}</h5>
        </Link>
      </div>
    </React.Fragment>
  );
};
