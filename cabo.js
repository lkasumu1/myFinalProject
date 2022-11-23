import React from 'react';
import '../../App.css';

import CardItem from '../CardItem';

export default function Cabo() {
  return <div className='about-container'>
    <h1>Services</h1>
    <div className='cards'>
    <h1>Cabo</h1>
    <div className='cards__container'>
    <div className='cards__wrapper'>
    <ul className='cards__items'>
    <CardItem
              src='../images/waldorf.png'
              text='Places to stay: Waldorf Astoria Los Cabos. Awarded the #1 resort in 
              Mexico by travel & leisure. You can choose from rooms, suites, casitas, villas, beachfronts, and private homes. Every room comes with its own plunge pool and ocean view. 
                There are 11 Resturaunts on site, a beach, a pool, a spa, and so much more. Sign up for a membership to get a price locked in. '
              // label='Adventure'
              // path='/services'
            />
<CardItem
              // src='../images/bahamas.png'
              text='Things to do: ATV riding, UTV riding, horse back riding, camel riding, boat ride, zip lining, snorkling,private yacht   '
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