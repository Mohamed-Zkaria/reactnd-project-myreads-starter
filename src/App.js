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
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      read: [],
      currentlyReading: [],
      wantToRead: [],
      none: []
    };

    this.updateBook = this.updateBook.bind(this);

  }
  // state = 

  updateBook(changes){
    this.setState(changes);
  }

  async componentDidMount(){
    try{
      const books = await getAll();
      let currentlyReading = books.filter( book=> book.shelf === 'currentlyReading')
      let wantToRead = books.filter(book=> book.shelf === 'wantToRead');
      let read = books.filter(book=> book.shelf === 'read');
      this.setState({loading: false});
      this.setState({read, wantToRead, currentlyReading});
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
              <Search shelf={"none"} state={this.state} setState={this.updateBook} loading={this.state.loading}/>
            </Route>
            <Route exact path="/">
              <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <CurrentlyReading shelf={"currentlyReading"} state={this.state} setState={this.updateBook} loading={this.state.loading}/>
                  <WantToRead shelf={"wantToRead"} state={this.state} setState={this.updateBook} loading={this.state.loading}/>
                  <Read shelf={"read"} state={this.state} setState={this.updateBook} loading={this.state.loading}/>
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
