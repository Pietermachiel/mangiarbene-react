import React from 'react';
import { Link } from 'react-router-dom';

export default ({ match: { url }, recipes }) => {

        const dishes = ["starter", "aside", "main", "desert", "basics"]

        return (
            <div>
                <div className="recipes">
                {dishes.map(hit => {
                    return (
                        <React.Fragment key={hit}>
                        <p className="dish-title">{hit}</p>
                        {recipes
                        .filter(r => hit === r.dish)
                        .map(({ title, id, index, book, product, bookTitle, bookId }) => {                      
                            return (
                           <div key={id} className="recipe">
                            <Link to={`/recipes/${id}`}>
                                <h3>{ title} { index }</h3> 
                            </Link>        
                                <div className="credits">
                                    <h5>
                                        { product }
                                        <span>
                                            <Link to={`/books/${bookId}`}>
                                            &nbsp;&nbsp;{bookTitle}
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