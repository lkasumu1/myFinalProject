import React from 'react';
import '../../App.css';

import CardItem from '../CardItem';

export default function Dubai() {
  return <div className='about-container'>
    <h1>
        Dubai
    </h1>
    <div className='cards'>
    <h1>Dubai</h1>
    <div className='cards__container'>
    <div className='cards__wrapper'>
    <ul className='cards__items'>
    <CardItem
              // src='../images/cabo.jpg'
              text='Places to stay: '
              // label='Adventure'
              // path='/services'
            />
<CardItem
              // src='../images/bahamas.png'
              text='Things to do '
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