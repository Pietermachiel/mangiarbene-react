import React from "react";
import { Link } from "react-router-dom";
import { truncate } from "../../common/common";
import ReactHtmlParser from "react-html-parser";

export default (props) => {
  return (
    <React.Fragment>
      <div className="recipes layout-recipes">
        <h1 className="mb-0">{props.title}</h1>
      </div>
      <div className="recipe-recipe">
        <div className="recipe-recipe_ingredients">
          <span>ingredients</span>
          <p>You must use</p>
          <p>The finest </p>
          <p>Ingredients</p>
        </div>
        <div className="recipe-recipe_method">
          <span>method</span>
          <ol>
            <li>He</li>
            <li>Ho</li>
            <li>Let's go</li>
          </ol>
        </div>
      </div>
      <br />
      <hr />
      <Link className="zwart" to={`/books/${props.bookId}`}>
        <div className="recipe-box">
          <div className="recipe-box_image">
            <img src={`/img/books/${props.bookId}_title.jpg`} alt="" />
          </div>
          <div className="recipe-box_credits">
            {props.books
              .filter((b) => b.id === props.bookId)
              .map((book) => {
                const truncatetext = truncate(book.content);
                const parsedBookContent = ReactHtmlParser(truncatetext);
                // if (props.bookId === book.id )
                return (
                  <React.Fragment key={book.index}>
                    <h6>{book.title}</h6>
                    <p>{book.author}</p>
                    {parsedBookContent} <span>Read more ></span>
                  </React.Fragment>
                );
              })}
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};
