import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { getAuth, updateProfile } from 'firebase/auth'
import './profile.css'
const Profile = () => {
      const auth = getAuth()
      const navigate = useNavigate()
      const onLogout = () => {
    auth.signOut()
    navigate('/')
  }

    return (
        
        <div className="container">
            <h2>My Profile</h2>
            <button type="button" className="btn" style={{marginTop:"100px"}} onClick={onLogout}>Log out</button>
        </div>
    )
}

export default Profile
