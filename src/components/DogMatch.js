import React from 'react';

const DogMatch = ({dogs, dogIndex, likeDog, dislikeDog, changeCurrentDog}) => {
  const currentDog = dogs[dogIndex]
  const handleClick = e => {
    e.target.name === 'yes' ? likeDog(currentDog) : dislikeDog(currentDog.id);
    changeCurrentDog();
  }

  return (
    <div className="container my-5">
      <div className="row float-right">
        <button className="btn btn-primary">My Barks</button>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <img className="card-img-top" src={currentDog.image} alt="Dog 1" />
            <div className="card-body">
              <h2 className="card-title">{currentDog.name}</h2>
              <p><strong>Breeds: </strong>
                {currentDog.breeds.map((breed, index) => <span key={index}>{breed}, </span>)}
              </p>
              <p className="card-text"><strong>Sex: </strong>{currentDog.sex}</p>
              <p className="card-text"><strong>Age: </strong>{currentDog.age}</p>
              <p className="card-text"><strong>Size: </strong>{currentDog.size}</p>
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
