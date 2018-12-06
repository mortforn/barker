import React from 'react';

const Search = () => (
  <div className="container container-fluid">
    <div className='card' id='homepage-card'>
      <h2 className="display-1">barker.</h2>
      <input className='form-control'type="text" placeholder='Search for Single Dogs in your Area' />
      <button className='btn btn-primary' id="search-button">BARK</button>
    </div>
  </div>
);

export default Search;
