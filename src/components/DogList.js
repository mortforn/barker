import React from 'react';
import { Link } from 'react-router-dom';
import DogListItem from './DogListItem'

/*this will be a stateless component that receives the likedDogs array
as props from the App component*/
const DogList = ({dogs}) => {
  //we will need functions to determine the most frequent properties found in the LikedDogs array
  //for now, size, gender & breed will display
  const mostFrequentSize = dogList => {
    let counts = {};
    let compare = 0;
    let mostFrequent = '';
    dogList.forEach(dog => {
      let size = dog.size;
      if (counts[size] === undefined) {
        counts[size] = 1;
      } else {
        counts[size] = counts[size] + 1;
      }
      if (counts[size] > compare) {
        compare = counts[size];
        mostFrequent = dog.size;
      }
    });
    if (mostFrequent === 'M') {
        return 'Medium';
    } else if (mostFrequent === 'S') {
        return 'Small';
    } else if (mostFrequent === "L")
        return 'Large';
  }

  const mostFrequentGender = dogList => {
    let counts = {};
    let compare = 0;
    let mostFrequent;
    dogList.forEach(dog => {
      let gender = dog.sex;
      if (counts[gender] === undefined) {
        counts[gender] = 1;
      } else {
        counts[gender] = counts[gender] + 1;
      }
      if (counts[gender] > compare) {
        compare = counts[gender];
        mostFrequent = dog.sex;
      }
    });
    return mostFrequent === 'M' ? 'Male' : 'Female'
  }

  const mostFrequentBreed = dogList => {
    let counts = {};
    let compare = 0;
    let mostFrequent;
    dogList.forEach(dog => {
      let breed = dog.breed;
      if (typeof breed === 'object') {
        breed = `${breed.join('-')} Mixe`;
      }
        if (counts[breed] === undefined) {
          counts[breed] = 1;
        } else {
          counts[breed] = counts[breed] + 1;
        }
        if (counts[breed] > compare) {
          compare = counts[breed];
          mostFrequent = breed;
        }
    });
    return mostFrequent;
  }

  const Preferences = `${mostFrequentSize(dogs)} ${mostFrequentGender(dogs)} ${mostFrequentBreed(dogs)}s.`
  //organizational function to affect how dogs are displayed

  //the below function maps through each of the indexes of likedDogs
  //and sends this information to the dogListItem component in order
  //get each individual liked dog's image to display

 const Dawgz = dogs.map(dog => {
    return (
      <DogListItem key={dog.id} dog={dog}/>
    )
  })
  
  if (dogs.length === 0) {
    return (
      <div className="container container-fluid" id="matches-header">
       <h1 className="display-1">Your Barks!</h1>
      <h3 id="results-lead-up">It looks like you haven't liked any dogs yet!</h3>
      <h3 id="results-lead-up">What are you thinking, sit down and decide what dog you like!</h3>
      <Link to='/match'><button className='btn btn-secondary mt-3 mb-5 mr-3'>Back</button></Link>
      <Link to='/'><button className='btn btn-primary mt-3 mb-5'>Start Matching</button></Link>
      </div>
    )

  } else {

    return (
    <div>
    <div className="container container-fluid" id="matches-header">
      <h1 className="display-1">Your Barks!</h1>
      <h3 id="results-lead-up">Based on your results, it looks like your favorite dogs are:</h3>
      <h4 id='preferences'>{ Preferences }</h4>
      <Link to='/match'><button className='btn btn-secondary mt-3 mb-5 mr-3'>Back</button></Link>
      <Link to='/'><button className='btn btn-primary mt-3 mb-5'>Search Elsewhere</button></Link>
      </div>
      <div className="row" id="list-of-matches">
        { Dawgz }
      </div>
    </div>
    );
  }
}

export default DogList;
