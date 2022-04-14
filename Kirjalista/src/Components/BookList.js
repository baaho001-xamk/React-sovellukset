import React, { useContext } from 'react';
import { BookContext } from '../Contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
   const {books} = useContext(BookContext);
    return books.length ? ( 
        <div className="book-list">
            <ul>
                {books.map(book => {
                    return ( <BookDetails book={book} key={book.id}/>);
                })}
            </ul>
        </div>
     ) : (
         <div className="empty"> Ei kirjoja luettavana...</div>
     )
//jos käyttäjä on lisännyt kirjoja listalleen, niin tulostetaan bookdetails.js
//jos käyttäjä ei ole lisännyt kirjoja, tulostetaan viesti "Ei kirjoja luettavana..."
}
 
export default BookList;