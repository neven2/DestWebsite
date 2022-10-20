
import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {BsSearch,BsFillHandbagFill} from 'react-icons/bs'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {CgProfile} from 'react-icons/cg'
import {} from 'react-icons'
import { auth } from '../../api/firebase'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Global/CartContext'


const Navbar = () => {
 const [isSignIn,setISsignIn]=useState(false)

 const history = useNavigate();
     const { totalQty } = useContext(CartContext);
    return (
   <header class="header container">

        <Link to='/'  class="logo">
            <h3 class="logo-text">Dest</h3>
        </Link>
        <nav class="navbar">
             <Link to='/products'>Products</Link>
            <Link to='/about'>About</Link>
            {/* <Link to='/offers'>Offers</Link> */}
            <Link to='/favorite'>Favorite</Link>
        </nav>

        <div class="icons rightside">
        <Link to='/' id="search-btn"><BsSearch /></Link>  
        <Link to='/Cart' id="cart-btn">
             <span className='no-of-products'>{totalQty}</span>
            <BsFillHandbagFill />
        </Link>
        <Link to='/profile' id="profile-btn"> <CgProfile /></Link>
        <HiOutlineMenuAlt3 id="menu-btn"/>
        </div>
    </header>
    );

}

export default Navbar
