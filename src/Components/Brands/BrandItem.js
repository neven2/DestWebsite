import React from 'react'
import { Link} from 'react-router-dom'
const BrandItem = ({listing}) => {
    return (
          <Link to={`/brand/${listing.brandName}`}>
            <section className="brand container">
                <img src={listing.icon} alt="" width="10px"/>
            </section>
        </Link>
    )
}

export default BrandItem
