import React,{useState} from 'react'
import '../Login/login.css'
import { toast } from 'react-toastify'
import { Link , useNavigate } from 'react-router-dom'
import {FaFacebookF} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import {AiOutlineUser,AiOutlineMail} from 'react-icons/ai'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import OAuth from '../../Components/OAuth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../api/firebase'
import {BiLockAlt} from 'react-icons/bi'
import Signup from '../../assets/signup.svg'

const SignUp = () => {
      const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const { name, email, password } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }


    const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name,
      })

      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)

      navigate('/')
    } catch (error) {
        console.log(error);
         toast.error('Something went wrong with registration')
    }
  }


    return (
         <section class="container">
              <div className="signup">
                <img src={Signup} alt="login" />
            <form onSubmit={onSubmit} class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <p className="sign-text">Already have an account 
                <Link to="/log-in"><span style={{color:"#D1375B"}}> LogIn</span></Link>
            </p>
            <div class="input-field">
               <AiOutlineUser className="icon"/>
              <input 
              type="text" 
              placeholder="Username" 
               id='name'
              value={name}
              onChange={onChange}
              />

            </div>
            <div class="input-field">
              <AiOutlineMail className="icon"/>

              <input 
              type="email" 
              placeholder="Email" 
              id='email'
              value={email}
              onChange={onChange}
              />
            </div>
            <div class="input-field">

            <BiLockAlt className="icon"/>
              <input 
               type={showPassword ? 'text' : 'password'}
              placeholder="Password" 
              value={password}
               id='password'
              onChange={onChange}
              />
            </div>
            <input type="submit" class="btn" value="Sign up" />
            <p class="social-text">Or Sign up with</p>
              <div class="social-media">
                <a href="#" class="social-icon">
                    <FaFacebookF/>
                </a>
                    <OAuth/>
                </div>
          </form>
          </div>
      </section>

    )
}

export default SignUp
