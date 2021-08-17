import React from 'react';
import Book from './BookComponent';
import Loading from './LoadingComponent';
function Read(){

    return (
        <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <Book />
                      </li>
                      <li>
                        <Book />
                      </li>
                      <li>
                        <Book />
                      </li>
                      <li>
                        <Loading />
                      </li>
                    </ol>
                  </div>
                </div>
    );
}

export default Read;