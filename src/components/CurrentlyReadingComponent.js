import React from 'react';
import Book from './BookComponent';
import Loading from './LoadingComponent';

function CurrentlyReading(props){
  let { state: {loading, currentlyReading }, setState, shelf } = props;
  let dataTodisplay;
  if(loading){
    dataTodisplay = <Loading />
  } 
  
  if( currentlyReading.length > 0){
    dataTodisplay = currentlyReading.map( (book) => {
      return <Book shelf={shelf} book={book} setState={setState} key={book.id}/>
    })
  } 
  if(!loading && currentlyReading.length === 0){ 
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