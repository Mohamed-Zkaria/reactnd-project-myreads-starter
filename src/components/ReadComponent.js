import React from 'react';
import Book from './BookComponent';
import Loading from './LoadingComponent';
function Read(props){
  let { loading } = props;
  let {books} = props;

  let dataTodisplay; 

  if(loading){
    dataTodisplay = <Loading />
  } 

  if( books.length > 0){
    dataTodisplay = books.map( (book, index) => {
      return <Book book={book} key={index}/>
    })
  } 
  if(!loading && books.length == 0){ 
    dataTodisplay = <h2>No books to show.</h2>
  }
  
  return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {dataTodisplay}
          </ol>
        </div>
      </div>
  );
}

export default Read;