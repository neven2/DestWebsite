import React from 'react'
import './notfound.css'
import {Link} from 'react-router-dom'
import notfound from '../../assets/notfound.svg'
const NotFound = () => {
    return (
        <div className="container not-found">
            <img src={notfound} alt="not found page" />
            <Link to="/">
                <button className="btn back-home">Back home</button>
            </Link>
            
        </div>
    )
}

export default NotFound
