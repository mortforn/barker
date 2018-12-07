import React from 'react';
import {Link} from 'react-router-dom';

const DogDetail = ({routerProps, dogs, unmatchDog}) => {
  const dog = dogs.find(d => d.id === routerProps.match.params.id);

  const handleClick = () => {
    unmatchDog(dog);
    routerProps.history.push('/matches');
  }

  return (
    <div className="container my-5">
    <div className="row">
      <Link to='/matches'><button className='btn btn-secondary mr-3'>Back</button></Link>
      <Link to='/'><button className='btn btn-primary'>Start Over</button></Link>
    </div>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <img className="card-img-top" src={dog.image} alt={dog.name} />
            <div className="card-body">
              <h2 className="card-title">{dog.name}</h2>
              <p><strong>Breeds: </strong>{dog.breed}</p>
              <p className="card-text"><strong>Sex: </strong>{dog.sex === 'F' ? 'Female' : 'Male'}</p>
              <p className="card-text"><strong>Age: </strong>{dog.age}</p>
              <p className="card-text"><strong>Size: </strong>{dog.size}</p>
              <p className="card-text"><strong>Description: </strong>{dog.desc}</p>
              <button className="btn btn-danger" name='no' onClick={handleClick}>Unmatch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default DogDetail;
