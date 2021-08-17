import React from 'react';
import Book from './BookComponent';
import Loading from './LoadingComponent';

function WantToRead(props){

  let { loading } = props;
  let {WantToReadBooks} = props;

  let dataTodisplay; 

    if(loading){
      dataTodisplay = <Loading />
    } 

    if( WantToReadBooks.length > 0){
      dataTodisplay = WantToReadBooks.map( (book, index) => {
        return <Book book={book} key={index}/>
      })
    } 
    if(!loading && WantToReadBooks.length == 0){ 
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