import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { slugify, truncate } from './common/common';
import ReactHtmlParser from 'react-html-parser';

console.log("Recipe works!");

export function Recipe (props) {  
    
    const recipe = props.recipes.find(({ id }) => id === props.match.params.id);

    const booktitle = slugify(recipe.book[0].title);

    console.log(props);

    return (
        <React.Fragment>
        <div className="recipes layout-recipes">
            <h1 className="mb-0">{ recipe.title }</h1>
        </div>
        <div className="recipe-recipe">
            <div className="recipe-recipe_ingredients">
                <span>ingredients</span>
                <p>ingredient 1</p>
                <p>ingredient 2</p>
                <p>ingredient 3</p>
                <p>ingredient 4</p>           
            </div>
            <div className="recipe-recipe_method">
                <span>method</span>
                <ol>
                    <li>Step one</li>
                    <li>Step two</li>
                    <li>Step three</li>
                    <li>Step four</li>    
                </ol>
            </div>
        </div>
        <br/>
        <hr/>
        <Link className="zwart" to={`/books/${booktitle}`}>
        <div className="recipe-box">
            <div className="recipe-box_image">
                <img src={`../public/img/books/${booktitle}_title.jpg`} alt=""/>
            </div>
            <div className="recipe-box_credits">

            {recipe.book.map(hit => {
                const truncatetext = truncate(hit.content);
                const parsedBookContent = ReactHtmlParser(truncatetext);
                return (
                <React.Fragment key={hit.index}>
                <h6>{ hit.title }</h6>    
                <p>{ hit.author }</p>     
                { parsedBookContent } <span>Read more ></span>    
                </React.Fragment>
                )
            })
            }
            </div>
        </div>
        </Link>
        </React.Fragment>
    )

}

function mapStateToProps(state) {  
    return {
      recipes: state.recipes,
    }
}
  
export default withRouter(connect(mapStateToProps)(Recipe))