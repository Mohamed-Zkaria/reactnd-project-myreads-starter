import React from 'react';


function Book(props){
    let { book } = props;
    return book ? (
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url('${book.imageLinks.thumbnail}')` }}></div>
            <div className="book-shelf-changer">
                <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{book.title}</div>
            {book.authors.map( author =>{
                return <div className="book-authors" key={author}>{author}</div>
            })}
        </div>
    ) : null;
}


export default Book;