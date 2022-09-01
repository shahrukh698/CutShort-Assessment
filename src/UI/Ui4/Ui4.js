import React from "react";
import './Ui4.css';
import Logo from '../Logos/logo.png'



const Ui4 = ()=> {
    return (
        <div>
    <div className='card'>
      <h1> <img src= {Logo}/> Eden </h1>
      <div className='switch'>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        
      </div>
     
      <div class="behind ">
  <div class="check">
  </div>
  </div>
      <h2>   Congratulations, Eren!</h2>
      
      <p> You have completed onboarding, you can start using the Eden!</p>
      <button> Launch Eden </button>
      
      
      </div>
      </div>
      
    
    )
}

export default Ui4;