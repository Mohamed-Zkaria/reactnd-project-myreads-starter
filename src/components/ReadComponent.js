import React from 'react';
import Book from './BookComponent';
import Loading from './LoadingComponent';
function Read(props){
  let { state: { loading, read }, setState, shelf } = props;

  let dataTodisplay; 

  if(loading){
    dataTodisplay = <Loading />
  } 

  if( read.length > 0){
    dataTodisplay = read.map( (book) => {
      return <Book shelf={shelf} book={book} setState={setState} key={book.id}/>
    })
  } 
  if(!loading && read.length === 0){ 
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