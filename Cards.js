import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these amazing vacation spots!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/cabo.jpg'
              text='Explore Things To Do in Cabo San Lucas, Mexico'
              label='Adventure'
              path='/cabo'
            />
            <CardItem
              src='../images/bahamas.png'
              text='Travel through Atlantis'
              label='Luxury'
              path='/atlantis'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../images/dubai.png'
              text='See the tallest building in the world'
              label='Luxary'
              path='/dubai'
            />
            <CardItem
              src='../images/tulum.jpg'
              text='Dive into the culture of Tulum'
              label='Adventure'
              path='/tulum'
            />
            <CardItem
              src='../images/monaco.png'
              text='Travel through monaco'
              label='Adrenaline'
              path='/monaco'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;