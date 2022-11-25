import React, {useContext} from 'react'
import { BookContext } from '../context/BookContext'
import BookForm from './form/BookForm'
import {useNavigate} from 'react-router-dom';

const AddBook = () => {
  const navigate = useNavigate();
  const {books, setBooks} = useContext(BookContext);

  const handleOnSubmit = (book) => {
    // console.log(book);
    setBooks([...books, book]);
    navigate('/');
  }

  return (
    <div className="addForm">
      <BookForm handleSubmit={handleOnSubmit}/>
    </div>
  )
}

export default AddBook