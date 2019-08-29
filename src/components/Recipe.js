import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { slugify, truncate } from './common/common';
import ReactHtmlParser from 'react-html-parser';

console.log("Recipe works!");

export function Recipe (props) {  
    
    const recipe = props.recipes.find(({ title }) => slugify(title) === props.match.params.url);

    const booktitle = recipe.book.map(hit => slugify(hit.title));

    return (
        <React.Fragment>
        <div className="recipes layout-recipes">
            <h1 className="mb-0">{ recipe.title }</h1>
        </div>
        <div className="recipe-recipe">
            <div className="recipe-recipe_ingredients">
                <span>ingredients</span>
                <p>You must use</p>
                <p>The finest ingredients</p>
                <p>As your raw materials</p>
                <p>For these will make you shine</p>        
            </div>
            <div className="recipe-recipe_method">
                <span>method</span>
                <ol>
                    <li>Passion</li>
                    <li>Care</li>
                    <li>Precision of method</li>
                    <li>Will generally suffice</li>    
                </ol>
            </div>
        </div>
        <br/>
        <p className="pellegrino">    
            <b>Pellegrino Artusi</b> 
            <a href="/">– Science in the Kitchen and the Art of Eating Well</a>
        </p>
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
                <p>{ parsedBookContent } <span>Read more ></span></p>     
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
  
export default connect(mapStateToProps)(Recipe)