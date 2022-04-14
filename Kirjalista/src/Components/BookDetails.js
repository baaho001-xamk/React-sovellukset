import React, { useContext } from 'react';
import { BookContext } from '../Contexts/BookContext';



const BookDetails = ({ book }) => {
    const {dispatch} = useContext(BookContext);
    return ( 
        //REMOVE_BOOK toiminto käytössä bookreducer.js tiedostosta
        <li onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>  
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
     );
}
 
export default BookDetails;