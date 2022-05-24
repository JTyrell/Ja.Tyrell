import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/public/images/trout-hall-falls.jpg'
              text='Explore the hidden waterfalls deep inside the hils of Clarendon'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='/public/images/flatbridge.jpg'
              text='Travel over the notorious Flat Bridge'
              label='Luxury'
              path='/trips'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/public/images/monkey-island.jpg'
              text="Set Sail to Monkey Island"
              label='Mystery'
              path='/services'
            />
            
            <CardItem
              src='/public/video/boston-jerk.mp4'
              text="Experience truly delectable Jamaican food"
              label='Cuizne'
              path='/products'
            />

            <CardItem
              src='/public/images/blue-mountains.jpg'
              text="Hike to the peaks of Jamaica on a guided tour"
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;