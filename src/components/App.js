import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Search from './Search';
import DogList from './DogList';
import DogDetail from './DogDetail';


const App = () => (
  <Switch>
    <Route exact path='/' component={Search} />
    <Route path='/matches' component={DogList} />
    <Route path='/matches/:id' component={DogDetail} />
  </Switch>
  // <h1 className="display-1">App Component</h1>
);

export default App;
