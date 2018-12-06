import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Search from './Search';
import DogList from './DogList';
import DogDetail from './DogDetail';
import pf from 'petfinder-client';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchedDogs: [],
      likedDogs: [],
      currentDog: null,
      dislikedDogs: [] // Array of ids to avoid potential duplicate dog matches
    };

    this.fetchDogs();
  }

  
  fetchDogs = () => {
    
    console.log(dogs);
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Search} />
        <Route path='/matches' component={DogList} />
        <Route path='/matches/:id' component={DogDetail} />
      </Switch>
    );
  }
  
}

export default App;
