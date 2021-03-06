import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

export default ({ match: { url }, books }) => {

    const kitchen = [
        "italian", "dutch", "spanish", "oriental", "english", "usa"
    ]
    books = _.sortBy(books, ['year']);
    
    return (
        <div>
            <div className="books">
            {kitchen.map(hit => {
                return (
                    <React.Fragment key={hit}>
                    <p className="kitchen-title">{hit}</p>

                    {books
                    .filter(b => hit === b.kitchen)
                    .map(book => 
                        <div key={book.index} className="book">
                        <Link to={`/books/${book.id}`}>
                            <h3>
                                <span>{ book.year}</span> { book.title }
                            </h3> 
                        </Link>        
                            
                            <h5>{ book.author }</h5>
                                    
                        </div>
                    )}                            
                    </React.Fragment>
                )
            }
            )}
            </div>
        </div>
    )
}