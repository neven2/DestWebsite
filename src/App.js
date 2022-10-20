import './App.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SwiperCore, { Autoplay } from 'swiper';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './Components/Header/Navbar'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'
import Footer from './Components/Footer/Footer'
import Category from './Components/Categories/Category'
import { auth, db } from './api/firebase'
import { CartContextProvider } from './Global/CartContext'
import Cart from './Components/Cart/Cart'
import {About,Services,Offers,NotFound,MainPage,Login,SignUp,Profile,Favorite} from './Pages'
import Products from './Components/Products/Products'
import ProductPage from './Components/ProductPage/ProductPage';
import { useState } from 'react';
function App() {
      const [user,setUser]=useState(null);
     
      function componentDidMount(){

        // getting user info for navigation bar
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                    setUser({
                        user: snapshot.data().name
                    })
                })
            }
            else {
               setUser(null)
            }
        })

    }
   SwiperCore.use([Autoplay])
  return (
    <>
    <CartContextProvider>
   <Router>
       <Navbar user={user}/>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/About' element={<About />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Favorite' element={<Favorite />} />
          <Route path='/Cart' element={<Cart user={user}/>} />
          <Route path='/category/:categoryName' element={<Category />} />

           <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
           </Route>
        
          <Route path='/log-in' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          
          {/* <Route path='/category/:categoryName' element={<Category />} />
          <Route path='/log-in' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} /> */}
          <Route path='/notfound' element={<NotFound />} />
                <Route path='*' element={<NotFound />} />
          <Route
            path='/products/:productId'
            element={<ProductPage />}
          />
        </Routes>
        <Footer/>
      </Router>
      <ToastContainer/>
      </CartContextProvider>
    </>
  );
}

export default App;
