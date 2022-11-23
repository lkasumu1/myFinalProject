import React from 'react'
import './HeroSection.css';
import '../App.css';
import {Button} from './Button';



function HeroSection() {
  return (
    <div className = 'hero-container'>
      <h1>Your Destination Awaits</h1>
      <p>What are you waiting for ?</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle ='btn--outline'
        buttonSize='btn--large'>
          Take a Look
        </Button>
        <Button className='btns' buttonStyle ='btn--primary'
        buttonSize='btn--large'>
          Join membership
        </Button>

      </div>
    </div>
  )
}

export default HeroSection