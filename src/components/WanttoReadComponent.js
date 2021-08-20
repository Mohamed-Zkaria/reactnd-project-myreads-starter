import React from 'react';
import Book from './BookComponent';
import Loading from './LoadingComponent';

function WantToRead(props){

  let { state: { loading, wantToRead }, setState, shelf } = props;

  let dataTodisplay; 

    if(loading){
      dataTodisplay = <Loading />
    } 

    if( wantToRead.length > 0){
      dataTodisplay = wantToRead.map( (book) => {
        return <Book shelf={shelf} book={book} setState={setState} key={book.id}/>
      })
    } 
    if(!loading && wantToRead.length === 0){ 
      dataTodisplay = <h2>No books to show.</h2>
    }
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {dataTodisplay}
            </ol>
          </div>
        </div>
    );
}

export default WantToRead;