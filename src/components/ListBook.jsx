import React, {useContext} from 'react'
import { BookContext } from '../context/BookContext'
import Book from './Book';

const ListBook = () => {
  const {books, setBooks} = useContext(BookContext);
  // console.log(books);

  const handleRemoveBook = (id) =>{
    const filterdBooks = books.filter(book => book.id !== id);
    setBooks(filterdBooks);
  }
  return (
    <div className="listbook">
      {books.length ? books.map(book =>(
        <Book book={book} key={book.id} handleRemoveBook={handleRemoveBook}/>
      )) : (
        <p className="nodata">No Books Found</p>
      )}
    </div>
  )
}

export default ListBook
