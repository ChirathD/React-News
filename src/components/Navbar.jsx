import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo-5.png'
import Login from './login.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo" style={{marginTop: '4.8px'}}>
          <img src={Logo} alt="" style={{width: '100px'}}/>
        </div>
        <div className="links">
          <Link className='link' to="/?cat=politics">Politics</Link>
          <Link className='link' to="/?cat=business">Business</Link>
          <Link className='link' to="/?cat=sport">Sport</Link>
          <Link className='link' to="/?cat=travel">Travel</Link>
          <Link className='link' to="/?cat=entertainment">Entertainment</Link>
          <Link className='link' to="/?cat=tech">Tech</Link>
          <Link className='link' to="/?cat=lifestyle">Life Style</Link>
        </div>
        <div className="login-icon">
          <Link className='login-icon-btn' to="/login">Login</Link>
          <img src={Login} alt="" style={{width: '20px',marginTop: '1px'}}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar