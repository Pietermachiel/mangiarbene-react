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
                        {recipes
                        .filter(r => hit === r.dish)
                        .map(({ title, id, index, book, product }) => {
                            const thebook = book.map(b => b.title);
                            // if (hit === recipe.dish)                           
                            return (
                           <div key={id} className="recipe">
                            <Link to={`/recipes/${id}`}>
                                <h3>{ title} { index }</h3> 
                            </Link>        
                                <div className="credits">
                                    <h5>
                                        { product }
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