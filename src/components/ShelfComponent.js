import React from 'react';
import Book from './BookComponent';
import Loading from './LoadingComponent';

const Shelf = props => {
  let { state: { loading }, state, setState, shelf, title } = props;
  let dataTodisplay; 

  if(loading){
    dataTodisplay = <Loading />
  }

  switch(shelf) {

    case 'read':
      if( state.read.length > 0){
        dataTodisplay = state.read.map( (book) => {
          return <Book shelf={shelf} book={book} setState={setState} key={book.id}/>
        })
      } 
      
      if(!loading && state.read.length === 0){ 
        dataTodisplay = <h2>No books to show.</h2>
      }
    break;

    case 'currentlyReading':
      if( state.currentlyReading.length > 0){
        dataTodisplay = state.currentlyReading.map( (book) => {
          return <Book shelf={shelf} book={book} setState={setState} key={book.id}/>
        })
      } 
      
      if(!loading && state.currentlyReading.length === 0){ 
        dataTodisplay = <h2>No books to show.</h2>
      }
    break;

    case 'wantToRead':
      if( state.wantToRead.length > 0){
        dataTodisplay = state.wantToRead.map( (book) => {
          return <Book shelf={shelf} book={book} setState={setState} key={book.id}/>
        })
      } 
      
      if(!loading && state.wantToRead.length === 0){ 
        dataTodisplay = <h2>No books to show.</h2>
      }
    break;

    default:
      dataTodisplay = <h2>Unknown Shelf.</h2>;
    break;
  }
  
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {dataTodisplay}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;