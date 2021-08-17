import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css'
import CurrentlyReading from './components/CurrentlyReadingComponent';
import Read from './components/ReadComponent';
import Search from './components/SearchComponent';
import WantToRead from './components/WanttoReadComponent';
import {getAll} from './BooksAPI'
class BooksApp extends React.Component {
  state = {
    loading: true,
    books: [],
    currentlyReadingBooks: [],
    WantToReadBooks: [],
  };

  async componentDidMount(){
    try{
      const books = await getAll();
      this.setState({books});
      this.setState({loading: false})
    } catch( err ){
      window.alert("Something wrong happend please try to refresh the page.");
      console.log(err);
    }
  }

  render(){
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/search">
              <Search/>
            </Route>
            <Route exact path="/">
              <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <CurrentlyReading currentlyReadingBooks={this.state.currentlyReadingBooks} loading={this.state.loading}/>
                  <WantToRead WantToReadBooks={this.state.WantToReadBooks} loading={this.state.loading}/>
                  <Read books={this.state.books} loading={this.state.loading}/>
                </div>
              </div>
              <div className="open-search">
                <Link to="/search"><button>Add a book</button></Link>
              </div>
            </div>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
  
}

export default BooksApp
