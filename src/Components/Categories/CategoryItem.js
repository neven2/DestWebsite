import React from 'react'
import { Link} from 'react-router-dom'
const categoryItem = ({listing}) => {
    return (
         <Link to={`/category/${listing.categoryName}`}>
        <div className="category container category-hover-effect">
            <img src={listing.icon} alt="" width="10px"/>
            <p className="category-text">{listing.categoryName}</p>
        </div>
        </Link>
    )
}

export default categoryItem
