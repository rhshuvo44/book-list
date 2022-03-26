import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './BookList.css';

const BookList = () => {
    const [bookLists,setBookLists]=useState([]);
    const [cart,setCart]=useState([])
    useEffect(() => {
        fetch("fakeData.json")
          .then((res) => res.json())
          .then((data) => setBookLists(data));
      }, []);
      const addToCard = (bookLists) => {
         const newCart = [...cart, bookLists];
        setCart(newCart);
      };
      const chooseBtn =()=>{
        console.log("g");
        
      }
      const reset=()=>{
          setCart([])
      }
    return (
        <div>
            <h1 className='title'>Book List</h1>
            <div className='Container'>
            <div className='book-list'>
            {
            bookLists.map(bookList=>
                <Book key={bookList.id}
            addToCard={addToCard} bookList={bookList}>
                
            </Book>)
            }

            </div>
            <div className='select-list'>
                    <Cart cart={cart}></Cart>
                    <button onClick={chooseBtn} className='for-me-btn'>For 1 me</button>
                    <button onClick={reset} className='for-me-btn'>Reset</button>
            </div>
            </div>
            
        </div>
    );
};

export default BookList;