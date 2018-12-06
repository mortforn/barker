import React from 'react';
import { Link } from 'react-router-dom'

//MortForn APIKEY = f5fcb86ef14100e76fe6fd4849928f17
//MortForn SECRET = 0414151e03e5a6b5e9ed9934a4ef4390

/*this will be a stateless component that receives the likedDogs array
as props from the App component*/
const DogList = () => {

  //we will need functions to determine the most frequent properties found in the LikedDogs array
  
  //const mostFrequentSize
  //const mostFrequentBreed
  //const mostFrequentGender

  //organizational function to affect how dogs are displayed

  //function to display detail view

//  const Dawgz = dogList.map((dog) => {
//     return (
//       <DogListItem key={dog.id} dog={dog}/>
//     )
//   })


  return (
  <div>
  <div className="container container-fluid" id="matches-header">
    <h1 className="display-1">Your Barks!</h1>
    <h3 id="results-lead-up">Based on your results, it looks like your favorite dogs are:</h3>
    <h4 id='preferences'>size gender breed</h4>
    <Link to='/'><button className='btn btn-primary'>Back</button></Link>
    </div>
    <div>
      <ul>
        Hello {/* Dawgz */}
      </ul>
      {/*This will be the card display for each of the matches*/}
    </div>
  </div>
  );
}

export default DogList;
