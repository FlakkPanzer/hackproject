import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import LogButtons from './components/LogButtons';
const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='Navbar-left'>
                <h1>SubAlert</h1>
            </div>
            <div className='Navbar-right'>
                <LogButtons text={'Sign In'} to={'/signin'} />
                <LogButtons text={'Sign Up'} to={'/signup'} />
            </div>  
        </div>
    )
}
export default Navbar