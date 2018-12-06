import React from 'react';

const DogDetail = ({routerProps, dogs}) => {
  const dog = dogs.find(d => d.id === routerProps.match.params.id);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <img className="card-img-top" src={dog.image} alt="Dog 1" />
            <div className="card-body">
              <h2 className="card-title">{dog.name}</h2>
              <p><strong>Breeds: </strong>
                {dog.breeds.map((breed, index) => <span key={index}>{breed}, </span>)}
              </p>
              <p className="card-text"><strong>Sex: </strong>{dog.sex === 'F' ? 'Female' : 'Male'}</p>
              <p className="card-text"><strong>Age: </strong>{dog.age}</p>
              <p className="card-text"><strong>Size: </strong>{dog.size}</p>
              <p className="card-text"><strong>Description: </strong>{dog.description}</p>
              <button className="btn btn-danger" name='no'>Unmatch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default DogDetail;
