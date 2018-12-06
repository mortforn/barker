import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Search from './Search';
import DogList from './DogList';
import DogDetail from './DogDetail';
// import pf from 'petfinder-client';
import DogMatch from './DogMatch';
import {dogs} from '../dogs';

// const petFinder = pf({
//   key: '<INSERT API KEY HERE>',
//   secret: '<INSERT API SECRET HERE>'
// });

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '27701',
      fetchedDogs: dogs,
      likedDogs: [],
      currentDog: this.state.fetchedDogs[1],
      dislikedDogs: [] // Array of ids to avoid potential duplicate dog matches
    };
  }

  // componentDidMount() {
  //   petFinder.pet.find({location: this.state.location}).then(resp => { // pet.find({animal: 'dog'}) doesn't work :/
  //     const dogs = resp.petfinder.pets.pet.map(pet => {
  //       return {
  //         age: pet.age,
  //         name: pet.name,
  //         breeds: pet.breeds,
  //         desc: pet.description,
  //         id: pet.id,
  //         sex: pet.sex,
  //         size: pet.size,
  //         animal: pet.animal,
  //         images: pet.media.photos
  //       };
  //     })
  //     this.setState({fetchedDogs: dogs});
  //   });
  // }
    

  setLocation = location => {
    this.setState({location});
  }

  likeDog = dog => {
    this.setState({likedDogs: this.state.likedDogs.concat([dog])});
  }

  dislikeDog = dog => {
    this.setState({dislikedDogs: this.state.dislikedDogs.concat([dog])});
  }


  render() {
    return (
      <Switch>
        <Route exact path='/' component={Search} />
        <Route path='/match' render={routerProps => (
          <DogMatch routerProps={routerProps} fetchedDogs={this.state.fetchedDogs} />
        )} />
        <Route path='/matches' component={DogList} />
        <Route path='/matches/:id' component={DogDetail} />
      </Switch>
    );
  }
  
}

export default App;