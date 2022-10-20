import { useState, useEffect,useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../api/firebase'
import Spinner from '../Spinner/Spinner'
import { CartContext } from '../../Global/CartContext'
import './productPage.css'
function ProductPage() {
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(true)
  const { dispatch } = useContext(CartContext);
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, 'products', params.productId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setListing(docSnap.data())
        setLoading(false)
      }
    }

    fetchListing()
  }, [navigate, params.productId,listing])

  if (loading) {
    return <Spinner />
  }

  return (
    <main>
   	<div class="section-fluid-main">
		<div class="section2">
	      	<div class="info-wrap mob-margin">
	      		<p class="title-up">Modern {listing.category}</p>
	      		<h2>{listing.productName}</h2>
	      		<h4>${listing.regularPrice}</h4>	
	      		<div class="section-fluid">
	      			<input class="desc-btn" type="radio" id="desc-1" name="desc-btn" checked/>
	      			<label for="desc-1">Description</label> 
	      			<input class="desc-btn" type="radio" id="desc-2" name="desc-btn"/>
		      		<div class="section-fluid desc-sec accor-1">
		      			<p>{listing.desc}</p>
		      		</div>	
	
	      		</div>	
	      		<h5>Availabe colors:</h5>
	      	</div>
	      	<div class="clearfix"></div>
	      	<input class="color-btn for-color-1" type="radio" id="color-1" name="color-btn" checked/>
	      	<label class="first-color" for="color-1"></label> 
	      	<input class="color-btn for-color-2" type="radio" id="color-2" name="color-btn"/>
	      	<label class="color-2" for="color-2"></label> 
	      	<input class="color-btn for-color-3" type="radio" id="color-3" name="color-btn"/>
	      	<label class="color-3" for="color-3"></label> 
	      	<input class="color-btn for-color-4" type="radio" id="color-4" name="color-btn"/>
	      	<label class="color-4" for="color-4"></label> 
	      	<input class="color-btn for-color-5" type="radio" id="color-5" name="color-btn"/>
	      	<label class="color-5" for="color-5"></label> 
	      	<input class="color-btn for-color-6" type="radio" id="color-6" name="color-btn"/>
	      	<label class="color-6" for="color-6"></label> 
	      	<div class="clearfix"></div>
	      	<div class="info-wrap" onClick={() => dispatch({ type: 'ADD_TO_CART', id:listing.id, listing })}>
				<a href="#" class="btn"><i class="uil uil-shopping-cart icon"></i> Add To Cart</a>
	      	</div>
	      	<div class="img-wrap chair-1">
            <img src={listing.productImg} alt="" className=""/>
          </div>
	      	
		</div>
	</div>
    </main>
  )
}

export default ProductPage