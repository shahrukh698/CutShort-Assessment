import React from "react";
import Logo from '../Logos/logo.png'
import './Ui3.css';
import {Link} from 'react-router-dom'


const Ui3 = () =>{
    return(

<div className='header'>
      
      <h1 ><img src= {Logo}/> Eden </h1>
      <div className='switch3'>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      <div className="container">
        <h1 className="eden">How are you planning to use Eden?</h1>
        
        <div className="header-content d-flex justify-content-around">
            <div className="right  mb-3">
            <h1><i className="fa fa-solid fa-user"></i></h1>
            <h4 style={{color:"black"}}>For myself</h4>
               <p style={{color:"black"}}>While better.Think <br /> More clearly .Stay <br /> organized</p>
    
            </div>
            <div className="right   mb-3">
            <h1><i className="fa fa-solid fa-users"></i></h1>
             <h4 style={{color:"black"}}>For myself</h4>
                <p style={{color:"black"}}>While better.Think <br /> More clearly .Stay <br /> organized</p>
    
            </div>

           
        </div>
        <div id="btn">
            <Link to="/ui4">
         <button >Create Workspace</button>
         </Link>
    </div>
      </div>
</div>


    )
}

export default Ui3;