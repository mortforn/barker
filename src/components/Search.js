import React from 'react';

const Search = (location) => (


  <div className="container container-fluid">
    <div className='card' id='homepage-card'>
      <h2 className="display-1">barker.</h2>
      <input className='form-control'type="text" placeholder='Search for Single Dogs in your Area' />
      <button href= "http://api.petfinder.com/pet.find?Key=b714b444bae83fb0713139022ca52c96&?Secret=3f4d3b0a604b56271b29a93772b20a79&format=json&location=27701&callback=jsonp_pamba4r2i9x" className='btn btn-primary' id="search-button">BARK</button>
    </div>
  </div>

);

export default Search;
