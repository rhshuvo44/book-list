import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import './Book.css';

const Book = (props) => {
    console.log(props);
    const { image, name, price, } = props.bookList;
    return (
        <div>
            <div className="book">
      <img src={image} alt="" />
      <div className="book-info">
        <h3 className="book-name">{name}</h3>
        <p className="price">Price : ${price}</p>
      </div>
      <button onClick={()=>props.addToCard(props.bookList)} className="btn-cart">
        <p>Add to Cart <span><FontAwesomeIcon icon={faCartPlus} /></span></p>
      </button>
    </div>
        </div>
    );
};

export default Book;