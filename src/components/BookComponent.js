import React, { useState } from 'react';
import { update } from '../BooksAPI';

//read, wantToRead, currentlyReading
function Book(props){
    let { book, shelf, setState } = props;
    const [bookShelf, setBookShelfstate] = useState( book.shelf || shelf);

    const removeBookFromCurrentShelf = (shelf, book) => {
        let remainingShelf = shelf.filter( bookShelf => bookShelf.id !== book.id);
        return remainingShelf;
    }

    const getTargetShelf = async (e) =>{
        let targetShelf = e.target.value;
        switch(targetShelf){
            case 'read':
                await update( book, targetShelf );

                await setBookShelf(targetShelf);
            break;
            
            case 'wantToRead':
                await update( book, targetShelf );

                await setBookShelf(targetShelf);
            break;

            case 'currentlyReading':
                await update( book, targetShelf );
    
                await setBookShelf(targetShelf);
            break;

            case 'none':
                await update( book, targetShelf );
                
                await setBookShelf(targetShelf);
            break;                

            default:
            break;
        }
    }

    const setBookShelf = async (targetShelf) => {
        if(targetShelf === 'none'){
            try{
                setState( (prevState) => {
                    setBookShelfstate(targetShelf);
                    let remainingShelf = removeBookFromCurrentShelf(prevState[shelf], book);
                    prevState[shelf] = remainingShelf;
                    return prevState;
                });
            } catch(err) {
                window.alert("Something Happened!");
                console.error(err);
            }
        } else if(targetShelf === shelf){
            return;
        } else {
            try{
                setState( (prevState) => {
                    setBookShelfstate(targetShelf);
                    let remainingShelf = removeBookFromCurrentShelf(prevState[shelf], book);
                    prevState[shelf] = remainingShelf;
                    book.shelf = targetShelf
                    prevState[targetShelf].push(book);
                    return prevState;
                });
            } catch(err) {
                window.alert("Something Happened!");
                console.error(err);
            }
        }
    }

    return book ? (
        <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url('${book.imageLinks.thumbnail}')` }}></div>
                <div className="book-shelf-changer">
                    <select value={bookShelf} onChange={getTargetShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                {/* {book.authors.map( author => {
                    return <div className="book-authors" key={author}>{author}</div>
                })} */}
            </div>
        </li>
    ) : null;
}


export default Book;