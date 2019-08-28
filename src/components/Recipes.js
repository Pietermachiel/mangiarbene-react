import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { slugify } from './common/common';

class Recipes extends Component {

    render() {
        const dishes = [
            "starter", "aside", "main", "desert", "basics"
        ]

        const { recipes } = this.props;

        return (
            <div>
                <div className="recipes">
                {dishes.map(hit => {
                    return (
                        <React.Fragment key={hit}>
                        <p className="dish-title">{hit}</p>
                        {recipes.map(recipe => {
                            const thebook = recipe.book.map(b => b.title);
                            if (hit === recipe.dish)                           
                            return (
                           <div key={recipe.index} className="recipe">
                            <Link to={"/recipes/" + slugify(recipe.title)}>
                                <h3>{ recipe.title} { recipe.index }</h3> 
                            </Link>        
                                <div className="credits">
                                    <h5>
                                        { recipe.product }
                                        <span>
                                            <Link to={`/books/${slugify(thebook)}`}>
                                            &nbsp;&nbsp;{thebook}
                                            </Link>
                                        </span>
                                    </h5>
                                </div>        
                            </div>    
                            )
                        }
                        )}                            
                        </React.Fragment>
                    )
                }
                )}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {  
    return {
      recipes: state.recipes,
    }
  }
  
export default connect(mapStateToProps)(Recipes)