import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';


export default function About() {
  return <div className='about-container'>
    <h1>About Us</h1>
    <div className='cards'>
    <h1>About Us </h1>
    <div className='cards__container'>
    <div className='cards__wrapper'>
    <ul className='cards__items'>
    <CardItem
              src='../images/IMG_4535.JPG'
              text='I am Lolade Kasumu creator of this website. I am a CS major here at GSU and I am graduating in the spring.
              TimeTravelz is a website for people who love to travel. I created this website with the intentions of
              helping people figure out what to do and where to stay on vacation.'
              // label='Adventure'
              // path='/services'
            />
<CardItem
              src='../images/tools.png'
              text='To build this website I used React and JS, AWS, Visual Studio and Firestore. Somethings ive learned from this class are how to create log in pages using a database and how to create a site in wordpress. '
              // label='Luxury'
              // path='/services'
            />
          </ul>
          <ul className='cards__items'></ul>
    </div>
    </div>
    </div>

    </div>
 
  
}

