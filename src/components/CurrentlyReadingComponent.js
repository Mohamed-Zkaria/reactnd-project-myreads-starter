import React from 'react';
import Book from './BookComponent';
import Loading from './LoadingComponent';

function CurrentlyReading(props){
  let { loading } = props;
  let {currentlyReadingBooks} = props;
  let dataTodisplay;
  if(loading){
    dataTodisplay = <Loading />
  } 
  
  if( currentlyReadingBooks.length > 0){
    dataTodisplay = currentlyReadingBooks.map( (book, index) => {
      return <Book book={book} key={index}/>
    })
  } 
  if(!loading && currentlyReadingBooks.length == 0){ 
    dataTodisplay = <h2>No books to show.</h2>
  }

  return (
      <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {dataTodisplay}
                  </ol>
                </div>
              </div>
  );
}

export default CurrentlyReading;