
import {useContext} from 'react'
import './ProductItem.css'
import {AiOutlineHeart,AiOutlineStar} from 'react-icons/ai'
import {BsFillHandbagFill} from 'react-icons/bs'
import { CartContext } from '../../Global/CartContext'
import { Link } from 'react-router-dom'
function ProductItem({ listing }) {
     const { dispatch } = useContext(CartContext);
  return (
   
    <div class="card-1 card-div">
         
            <div class="like-icon-div">
                <label for="card-1-like" class="like-icon-div-child">
                    <AiOutlineHeart style={{color:"#D1375B"}}/>
                </label>
                <p className="rating">
                    <span><AiOutlineStar/></span>
                    <span>{listing.rating}</span>
                </p>
            </div>
            <Link to={`/products/${listing.id}`}>
            <div class="gow-img-div img-div">
                <img src={listing.productImg} alt="god-of-war-figurine"/>
            </div>
             </Link>
            <div class="text-container">
                <h2 class="item-name">{listing.productName}</h2>
                <div class="pricing-and-cart">
                    <div class="pricing">
                        <p class="price">$ {listing.regularPrice}</p>
                    </div>
                </div>
                
                 <BsFillHandbagFill className="text-right" onClick={() => dispatch({ type: 'ADD_TO_CART', id: listing.id, listing })}/>
            </div>
           
        </div>
  )
}

export default ProductItem
