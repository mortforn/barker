import React from 'react';
import Cards, {Card} from 'react-swipe-card';
import {dogs} from '../dogs';

const Wrapper = () => (
  <Cards onEnd={console.log("action('end')")} className='master-root'>
    {dogs.map(dog =>
      <Card
        key={dog.id}
        onSwipeLeft={() => {console.log("action('swipe left')")}}
        onSwipeRight={() => {console.log("action('swipe right')")}}>
        <h2>{dog.name}</h2>
      </Card>
    )}
  </Cards>
);

export default Wrapper;