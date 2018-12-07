import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const DogMatch = ({dogs, dogIndex, likeDog, dislikeDog, changeCurrentDog, moreInfo, showInfo}) => {
  if(!dogs) {
    return(
      <div className="text-center">
        <h1>There aren't any dogs in this area :(</h1>
        <Link to='/' className="btn btn-primary">Start Over</Link>
      </div>
    );
  }

  const currentDog = dogs[dogIndex];

  const handleClick = e => {
    e.target.name === 'yes' ? likeDog(currentDog) : dislikeDog(currentDog.id);
    changeCurrentDog();
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center mb-3">
        <Link to='/' className='btn btn-secondary mr-2'>Start Over</Link>
        <Link to='/matches' className="btn btn-primary">My Barks</Link>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <img className="card-img-top" src={currentDog.image} alt={currentDog.name} />
            <div className="card-body">
            <h2 className="card-title">
              <span>{currentDog.name}</span>
              <button className="btn btn-secondary btn-sm ml-1" name='no' onClick={showInfo}>Info</button>
            </h2>

              {moreInfo ? 
              <Fragment>
              <p className="card-text"><strong>Sex: </strong>{currentDog.sex === 'F' ? 'Female' : 'Male'}</p>
              <p className="card-text"><strong>Breed: </strong>{currentDog.breed}</p>
              <p className="card-text"><strong>Age: </strong>{currentDog.age}</p>
              <p className="card-text"><strong>Size: </strong>{currentDog.size}</p>
              </Fragment>
              : null}
              
              <button className="btn btn-danger" name='no' onClick={handleClick}>No</button>
              <button className="btn btn-success float-right" name='yes' onClick={handleClick}>Yes</button>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default DogMatch;
