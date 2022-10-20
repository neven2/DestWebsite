import React from 'react'
import './favorite.css'
import {Link} from 'react-router-dom'
import Wishlist from '../../assets/wishlist.svg'
const Favorite = () => {
    return (
        <section className="container not-found">
            <img src={Wishlist} alt="Wishlist image" />
            <h3 className="text-center text-head">Your wishlist is empty</h3>
            <p className="text-center">Look like you haven’t made your choice yet</p>
            <Link to="/">
                <button className="btn back-home">Shop Now</button>
            </Link>
        </section>
    )
}

export default Favorite
