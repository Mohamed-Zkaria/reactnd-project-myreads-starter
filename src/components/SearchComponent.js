import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI';
import Book from './BookComponent';

function Search(props){
  let { setState, shelf } = props;

  const [searchedBooks, setSearchedBooks] = useState([]);
  const [searhQuery, setSearchQuery] = useState("");
  
  const fetchData = async () => {
    if( searhQuery !== '' ){
      let result = await search(searhQuery);
      if(result.length > 0){
        setSearchedBooks(result);
      }
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
              <Link to="/"><button className="close-search">Close</button></Link>
              <div className="search-books-input-wrapper">                  
                <input type="text" placeholder="Search by title or author"  value={searhQuery} onChange={getSearchedBook}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  searhQuery.length > 0  && searchedBooks.length > 0 ? 
                    searchedBooks.map(book=> <Book book={book} setState={setState} shelf={book.shelf || shelf} key={book.id}/>) 
                  : ''
                }
              </ol>
            </div>
      </div>
  );
}

export default Search;