import React from 'react'
import './Ui1.css';
import {Link} from 'react-router-dom'
import Logo from '../Logos/logo.png'

const Ui1 = () =>{
  return (
    <div>
    <div className='card'>
      
      <h1 >  <img src= {Logo}/> Eden </h1>
      <div className='switch1'>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      <h2> Welcome! First things first...</h2>
      <p> You can always change them later.</p>
      <div className='form'>
        <h5 style={
          {textAlign:"left"}
        }>Full Name</h5>
        <input type='text' autoFocus placeholder='Steve'/>
        <h5 style={
          {textAlign:"left"}
        }>Last Name</h5>
        <input type='text' autoFocus placeholder='Jobs'/>
      </div>
      <Link to="/ui2">
      <button> Create </button>
      </Link>
      </div>
      
    </div>
  )
}

export default Ui1;
