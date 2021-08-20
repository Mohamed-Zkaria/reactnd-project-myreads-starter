import React from 'react';

//read, wantToRead, currentlyReading
function Book(props){
    let { book, shelf, setState } = props;

    const removeBookFromCurrentShelf = (shelf, book) => {
        let remainingShelf = shelf.filter( bookShelf => bookShelf.id !== book.id);
        return remainingShelf;
    }
    const getTargetShelf = async (e) =>{
        let targetShelf = e.target.value;

        switch(targetShelf){
            case 'read':
                await setBookShelf(targetShelf);
            break;
            
            case 'wantToRead':
                await setBookShelf(targetShelf);
            break;

            case 'currentlyReading':
                await setBookShelf(targetShelf);
            break;

            default:
            break;
        }
        
    }

    const setBookShelf = async (targetShelf) => {
        if(targetShelf === shelf){
            return;
        } else {
            try{
                setState( (prevState) => {
                    let remainingShelf = removeBookFromCurrentShelf(prevState[shelf], book);
                    prevState[shelf] = remainingShelf;
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
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url('${book.imageLinks.thumbnail}')` }}></div>
            <div className="book-shelf-changer">
                <select defaultValue={'none'} onChange={getTargetShelf}>
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