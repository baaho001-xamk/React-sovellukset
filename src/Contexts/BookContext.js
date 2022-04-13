import React, {createContext, useReducer, useEffect} from 'react';
import { bookReducer } from '../Reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [], () =>{
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });
    //lisätään käyttäjän antamat tiedot local storageen jotta tiedot eivät katoa kun selain päivitetään tai suljetaan.
    useEffect(() => {
        localStorage.setItem('books',JSON.stringify(books))
    },[books]);

    
    return(
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;