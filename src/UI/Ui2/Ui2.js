import React from "react";
import './Ui2.css';
import {Link} from 'react-router-dom'
import Logo from '../Logos/logo.png'



const Ui2 = ()=> {
    return (
        <div>
    <div className='card'>
      <h1> <img src= {Logo}/>Eden </h1>
      <div className='switch2'>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      <h2> Let's set up a home for all your work</h2>
      
      <p> You can always create another workspace later.</p>
      <div className='form'>
        <h5 style={
          {textAlign:"left"}
        }>Workspace Name</h5>
        <input type='text' autoFocus placeholder='Eden'/>
        <h5 style={
          {textAlign:"left"}
        }>Workspace URL (optional)</h5>
        <form>
        <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">www.eden.com/</span>
    </div>
    <input type="text" autoFocus placeholder='Example' class="form-control"/>
  </div>
  </form>
      </div>
      <Link to="/ui3">
      <button> Create </button>
      </Link>
      </div>
      
    </div>
    )
}

export default Ui2

