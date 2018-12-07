import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Search from './Search';
import DogList from './DogList';
import DogDetail from './DogDetail';
import pf from 'petfinder-client';
import DogMatch from './DogMatch';
// import {dogs} from '../dogs'; Hard-coded dogs

// Setup pf-client with API creds
const petFinder = pf({
  key: '5cfcc1035f4f0b975f35e94ea34baa4b',
  secret: '9d4c602278e3b5bd5e8ced462b26ba33'
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moreInfo: false,
      dogs: [],
      likedDogs: [], 
      dogIndex: 0
    };
  }

  // Fetch dogs from Petfinder API, set them as state, then redirect via the callback
  fetchDogs = (location, callback) => {
    petFinder.pet.find({
      animal: 'dog',
      location
    }).then(resp => {
      if(resp.petfinder.pets === undefined) {
        return;
      } else {
        const dogs = resp.petfinder.pets.pet.map(pet => {
          return {
            age: pet.age,
            name: pet.name,
            breed: pet.breeds.breed,
            desc: pet.description ? pet.description.normalize('NFD').replace(/a[\u0300-\u036f]/g, "'") : null,
            id: pet.id,
            sex: pet.sex,
            size: pet.size,
            animal: pet.animal,
            image: pet.media ? pet.media.photos.photo[2].value : null
          };
        })
        this.setState({dogs});  
      }
    }).then(() => callback());
  }
    
  // Changes current dog on match page
  changeCurrentDog = () => {
    this.setState({dogIndex: this.state.dogIndex + 1});
  }

  // Sets user's location on search page
  setLocation = location => {
    this.setState({location});
  }

  // Add dog to likedDogs array if vote is 'Yes'
  likeDog = dog => {
    this.setState({likedDogs: this.state.likedDogs.concat([dog])});
    this.changeCurrentDog();
  }

  // Simply changes current dog if vote is 'No'
  dislikeDog = () => {
    this.changeCurrentDog();
  }

  // Toggle dog info on match page
  showInfo = () => {
    this.setState({moreInfo: !this.state.moreInfo});
  }

  // Removes dog from likedDogs array
  unmatchDog = dog => {
    this.setState({likedDogs: this.state.likedDogs.filter(d => d.id !== dog.id)});
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={routerProps => (
          <Search routerProps={routerProps} fetchDogs={this.fetchDogs} />
        )} />
        <Route path='/match' render={() => (
          <DogMatch moreInfo={this.state.moreInfo} showInfo={this.showInfo} dogs={this.state.dogs} dogIndex={this.state.dogIndex} likeDog={this.likeDog} dislikeDog={this.dislikeDog} />
        )} />
        <Route path='/matches/:id' render={routerProps => (
          <DogDetail routerProps={routerProps} dogs={this.state.dogs} unmatchDog={this.unmatchDog} />
        )} />
        <Route path='/matches' render={() => (
          <DogList dogs={this.state.likedDogs} />
        )} />
      </Switch>
    );
  }
  
}

export default App;