import React from "react";
import { Link } from "react-router-dom";
// import _ from 'lodash';
import { slugify } from "../common/common";

export default (props) => {
  const { books, recipes, posts } = props;

  // const recipeNumber = recipes.length;
  // var recipeRandom = _.random(recipeNumber, true);
  // recipeRandom = Math.floor(recipeRandom);

  // const bookNumber = books.length;
  // var bookRandom = _.random(bookNumber, true);
  // bookRandom = Math.floor(bookRandom);

  return (
    <div className="home">
      <div className="home-img_artisjok">
        <img src="/img/artisjok.jpg" alt="" />
        <div className="theart">
          <Link
            to={`/books/${slugify(
              "Science in the Kitchen and the Art of Eating Well"
            )}`}
            aria-label="The art of eating well"
          >
            The art of eating well
          </Link>
        </div>
      </div>
      <div className="home-quote">
        <p>
          "Cooking is a troublesome sprite. Often it may drive you to despair.
          Yet it is also very rewarding, for when you do succeed, or overcome a
          difficulty in doing so, you feel the satisfaction of a great triumph.{" "}
          <br />
          <br /> If you do not aspire to become a premier cook, you do not need
          to have been born with a pan on your head to become a good one.{" "}
          <span>
            Passion, care, and precision of method will generally suffice; then,
            of course, you must use the finest ingredients as your raw
            materials, for these will make you shine.
          </span>
          "
        </p>
        <br />
        <p className="pellegrino">
          <b>Pellegrino Artusi</b>
          <Link
            to={`/books/${slugify(
              "Science in the Kitchen and the Art of Eating Well"
            )}`}
          >
            – Science in the Kitchen and the Art of Eating Well
          </Link>
        </p>
      </div>
      <hr />
      <br />

      <h3 className="blauw">
        Note to the reader – <span className="smaller">React version</span>
      </h3>
      <div className="blog-post kramdown">
        <blockquote>
          <p>
            {" "}
            This website demonstrates the <strong>
              MangiarBene React
            </strong>{" "}
            version of the project <strong>Jekyll as API endpoint</strong>,
            accompaning{" "}
            <a
              href="https://jekyllconf.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="api.roozen.nl"
            >
              JekyllConf2019
            </a>{" "}
            on this issue. The{" "}
            <a
              href="https://jekyllrb.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="api.roozen.nl"
            >
              Jekyll
            </a>{" "}
            content is to be concidered as fake, exept for the{" "}
            <a
              href="/development/2019/09/16/jekyll-api-endpoint-demo.html"
              aria-label="Last post"
            >
              latest post
            </a>
            , which contains the explanation of the demo. The fake Jekyll{" "}
            <strong>recipe</strong> and <strong>book</strong> markup documents
            are stored as objects as well and made available as REST api
            endpoints. In Jekyll endpoints it is only possible to use the GET
            request, which makes sense because Jekyll is a static website
            generator in the first place. Consequently there are no dynamic
            endpoints available, and therefore no possiblilty to change the
            content this way.
          </p>
        </blockquote>
        <blockquote>
          <p>
            The API endpoints are beiing consumed in this actual{" "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="api.roozen.nl"
            >
              Reactjs
            </a>{" "}
            application. As you will experience and to demonstrate the working
            and purpose of the Jekyll API endpoints this{" "}
            <strong>MangiarBene React</strong> website is designed almost
            exactly the same way as the{" "}
            <strong>
              <a
                href="https://mangiarbeneapi.roozen.nl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="mangiarbeneapi.roozen.nl"
              >
                MangiarBene Jekyll
              </a>
            </strong>{" "}
            website.
          </p>
        </blockquote>
        <blockquote>
          <p>
            You will find the explanation of the project in the{" "}
            <a
              href="/development/2019/09/16/jekyll-api-endpoint-demo.html"
              aria-label="Last post"
            >
              latest post
            </a>
            .
          </p>
        </blockquote>
      </div>

      {/* latest post */}
      <p className="pl-2em">latest post</p>
      {posts
        .filter((post, id) => id === 0)
        .map((post, id) => {
          const date = new Date(post.date);
          // if (id === 0 && hit === "latest")
          return (
            <React.Fragment key={id}>
              <div className="blog blog-post">
                <Link
                  to={`/posts/${slugify(post.title)}`}
                  aria-label="Last post"
                >
                  <h3>{post.title}</h3>
                </Link>
                <p className="summary">
                  {post.category}
                  <span className="date">
                    &nbsp;{date.getDate()}/{date.getMonth()}/
                    {date.getFullYear()}
                  </span>
                </p>
              </div>
            </React.Fragment>
          );
        })}
      {/* recipe of the day */}
      <p className="pl-2em">recipe of the day</p>
      {recipes
        .filter((recipe, id) => id === 3)
        .map((recipe) => {
          return (
            <div key={recipe.index} className="recipe">
              <Link
                to={`/recipes/${slugify(recipe.title)}`}
                aria-label="Recipe of the day"
              >
                <h3>
                  {recipe.title} {recipe.index}
                </h3>
              </Link>
              <div className="credits">
                <h5>
                  {recipe.product}
                  <span>
                    <Link to={`/books/${recipe.bookId}`}>
                      &nbsp;&nbsp;{recipe.bookTitle}
                    </Link>
                  </span>
                </h5>
              </div>
            </div>
          );
        })}
      {/* book of the day */}
      <p className="pl-2em">book of the day</p>
      {books
        .filter((book, id) => id === 3)
        .map((book) => {
          return (
            <div key={book.index} className="book">
              <Link to={`/books/${book.id}`} aria-label="Book of the day">
                <h3>
                  <span>{book.year}</span> {book.title}
                </h3>
              </Link>
              <div className="credits">
                <h5>{book.author}</h5>
              </div>
            </div>
          );
        })}
      {/* database */}
      <p className="pl-2em">database</p>
      <div className="home-database">
        <Link to="/recipes" className="nav-link" aria-label="Recipes">
          <h3>{recipes.length} recipes </h3>
        </Link>
        <Link to="/books" className="nav-link" aria-label="Books">
          <p>{books.length} books</p>
        </Link>
      </div>

      {/* website */}
      <p className="pl-2em">Jekyll website</p>
      <a
        href="https://trim-seahorse.cloudvent.net"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hosted at CloudCannon"
      >
        hosted at CloudCannon
      </a>
    </div>
  );
};
