import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';

export default function SiteDescription() {
  return <div className='cards'>
  <h1>Site Description</h1>
  <div className='cards__container'>
    <div className='cards__wrapper'>
      <ul className='cards__items'>
        <CardItem
          src='../images/morroco.jpeg'
          text='This site is for people who love to travel or want to travel more! I created 
          this site because I noticed when going on vacation its hard to find things to do 
          online. From this site I want users to be able to book vacations and have a bunch of activites
          planned for their trip. From this site I want users to book their trip and have a great time. '
          label='Adventure'
          path='/Cabo'
        />
      </ul>
    </div>
  </div>
</div>
}