import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI';
import Book from './BookComponent';

function Search(props){
  let { setState, shelf, state: { bookShelfIds } } = props;

  const [searchedBooks, setSearchedBooks] = useState([]);
  const [searhQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(false);
  
  const fetchData = async () => {
    if( searhQuery !== '' ){
      let result = await search(searhQuery);
      if(result.hasOwnProperty('error')){
        setError(true);
        setSearchedBooks([]);
        return;
      } 

      setError(false);
      result = result.map( book => {
        if(bookShelfIds[book.id]){
          book.shelf = bookShelfIds[book.id];
          return book;
        }
        return book;
      })
      setSearchedBooks(result);

    } else {
      setSearchedBooks([]);
    }
  };

  useEffect( () => {
    fetchData();
  }, [searhQuery]);
  
  const getSearchedBook = async (e) => {
    setSearchQuery(e.target.value);
  }

  return (
      <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">                  
                <input type="text" placeholder="Search by title or author"  value={searhQuery} onChange={getSearchedBook}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  error ? <h2>No results</h2> : searhQuery.length > 0  && searchedBooks.length > 0 ? 
                    searchedBooks.map( book => <Book book={book} setState={setState} shelf={book.shelf || shelf} key={book.id}/>) 
                  : ''
                }
              </ol>
            </div>
      </div>
  );
}

export default Search;