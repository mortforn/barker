import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Search from './Search';
import DogList from './DogList';
import DogDetail from './DogDetail';
import pf from 'petfinder-client';

const petFinder = pf({
  key: '<INSERT API KEY HERE>',
  secret: '<INSERT API SECRET HERE>'
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchedDogs: [],
      likedDogs: [],
      currentDog: null,
      dislikedDogs: [] // Array of ids to avoid potential duplicate dog matches
    };
  }

  componentDidMount() {
    petFinder.pet.find({location: '27701'}).then(resp => { // pet.find({animal: 'dog'}) doesn't work :/
      this.setState({fetchedDogs: resp.petfinder.pets.pet});
    });
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