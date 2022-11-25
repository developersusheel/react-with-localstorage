import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid';

const BookForm = ({book, handleSubmit}) => {

  const [bookState, setBookState] = useState({
    name: book ? book.name : '',
    author: book ? book.author : '',
    price: book ? book.price : '',
  });
  

  // console.log(bookState);

  const handleChange = (e) => {
    setBookState({
      ...bookState,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault(); 
    handleSubmit({
      id: uuidv4(),
      date: new Date(),
      ...bookState,
    });
    setBookState({name: '', price: '', author: ''})
  }

  const renderInputField = (label, placeholder, name) =>(
    <div className="inputfield">
      <label>{label}</label>
      <input 
        onChange={handleChange} 
        type="text"
        name={name} 
        placeholder={placeholder} value={bookState[name]}/>
    </div>
  )

  const disabledSubmit = !bookState.name || !bookState.author || !bookState.price;

  return (
    <form onSubmit={onSubmit}>
      {renderInputField('Book Name', 'Enter Book name...', 'name')}
      {renderInputField('Book Author', 'Enter Book Author...', 'author')}
      {renderInputField('Book Price', 'Enter Book Price...', 'price')}
      <button className="btnForm" type="submit" disabled={disabledSubmit}>{book ? 'Update' : 'Submit'}</button>
    </form>
  )
}

export default BookForm
