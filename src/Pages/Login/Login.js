import React,{useState} from 'react'
import './login.css'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import {FaFacebookF} from 'react-icons/fa'
import OAuth from '../../Components/OAuth'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {AiOutlineMail} from 'react-icons/ai'
import {BiLockAlt} from 'react-icons/bi'
import login from '../../assets/login.png'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

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

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      if (userCredential.user) {
        navigate('/')
      }
    } catch (error) {
     toast.error('Bad User Credentials')
    }
  }

    return (
    <section className="container">
        <div className="signin">
            <img src={login} alt="login" />
            <form onSubmit={onSubmit} class="sign-in-form">
                <h2 class="title">Log in</h2>
                <p className="sign-text">Don't have an account 
                    <Link to="/sign-up"> <span style={{color:"#D1375B"}}>Sign Up</span>
                    </Link>
                </p>
                <div class="input-field">
              <AiOutlineMail className="icon"/>
              <input 
              type="email" 
              placeholder="Email" 
               id='email'
              value={email}
              onChange={onChange}/>
            </div>
                <div class="input-field">
                <BiLockAlt className="icon"/>
                <input
                 type={showPassword ? 'text' : 'password'} 
                 placeholder="Password" 
                 id='password'
                 value={password}
                onChange={onChange}
                />
                </div>
                 <Link to="/forgot-password">
                     <p  className="forgot-text">Forgot Password</p></Link>
                <input type="submit" value="Login" class="btn solid" />
               
                <p class="social-text">Or Log in with </p>
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

export default Login
