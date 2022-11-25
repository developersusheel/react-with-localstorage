import React, {useContext} from 'react'
import { BookContext } from '../context/BookContext'
import BookForm from './form/BookForm'
import {useNavigate, useParams} from 'react-router-dom';

const EditBook = () => {
  
  const {id} = useParams();
  const navigate = useNavigate();
  const {books, setBooks} = useContext(BookContext);
  

  const booktoEdit = books.filter(book => book.id === id);

  const handleOnSubmit = (book) => {
    // console.log(book);
    const filteredBook = books.filter(book => book.id !== id);
    setBooks([...filteredBook, book]);
    navigate('/');
  }

  return (
    <div className="addForm">
      <BookForm book={booktoEdit[0]} handleSubmit={handleOnSubmit}/>
    </div>
  )
}

export default EditBook