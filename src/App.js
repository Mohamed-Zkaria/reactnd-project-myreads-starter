import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css'
import Search from './components/SearchComponent';
import {getAll} from './BooksAPI'
import Shelf from './components/ShelfComponent';
import PageNotFound from './components/PageNotFoundComponent';
class BooksApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      read: [],
      currentlyReading: [],
      wantToRead: [],
      none: [],
      shelves : [
        { title: 'Currently Reading', key: 'currentlyReading' },
        { title: 'Want To Read', key: 'wantToRead' },
        { title: 'Read', key: 'read' },
     ],
     bookShelfIds: {},
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
      books.map(book=>{
        this.setState(prevState=>{
          return prevState.bookShelfIds[book.id] = book.shelf;
        })
      })

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
              <Search 
              shelf={"none"} 
              state={this.state} 
              setState={this.updateBook} 
              loading={this.state.loading}/>
            </Route>
            <Route exact path="/">
              <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>

                {
                  this.state.shelves.map( shelf => {
                    return <Shelf 
                      title={shelf.title} 
                      shelf={shelf.key} 
                      state={this.state} 
                      setState={this.updateBook} 
                      loading={this.state.loading} 
                      key={shelf.key}  
                    />;
                  })
                }
                </div>
              </div>
              <div className="open-search">
                <Link to="/search" className="searchLink">Add a book</Link>
              </div>
            </div>
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
  
}

export default BooksApp
