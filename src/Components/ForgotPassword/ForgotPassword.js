import React,{useState} from 'react'
import './forgotpassword.css'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'
import {AiOutlineMail} from 'react-icons/ai'
import '../../Pages/Login/login.css'
const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const onChange = (e) => setEmail(e.target.value)

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent')
    } catch (error) {
      toast.error('Could not send reset email')
    }
  }

    return (
        <div className="container">
               <div className="forgot-password">
                   <h3 className="forgot-text">Forgot Password</h3>
            <form onSubmit={onSubmit} class="sign-in-form">
                <div class="input-field">
              <AiOutlineMail className="icon"/>
              <input 
              type="email" 
              placeholder="Email" 
               id='email'
              value={email}
              onChange={onChange}/>
            </div>
                <input type="submit" value="Reset" class="btn" />
            </form>
        </div>
        </div>
    )
}

export default ForgotPassword
