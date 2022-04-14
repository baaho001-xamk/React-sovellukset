import React, { useContext } from 'react';
import { BookContext } from '../Contexts/BookContext';

const Navbar = () => {
   const {books} = useContext(BookContext);
    return ( 
        <div className='navbar'>
            <h1>Kirjalista</h1>
            <p>Tällä hetkellä sinulla on {books.length} kirjaa luettavana...</p> 

        </div>
     );
     //luetaan books.length ja tulostetaan se (montako kirjaa luettavana)
}
 
export default Navbar;
