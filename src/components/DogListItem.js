import React from 'react';
import { Link } from 'react-router-dom'

const DogListItem = ({dog}) => {
  
  return (
    <div className="col-md-3 thumbnail" id={dog.id}>
    <img src={dog.image} className="thumbnail" alt={dog.name}></img>
    </div>
  )
}

export default DogListItem;