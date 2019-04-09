import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () =>{
    return(
        <div className='headerTitle'>
        <h1>Lambda School</h1>
        <HeaderContent />
        </div>
    )
}

export default HeaderTitle