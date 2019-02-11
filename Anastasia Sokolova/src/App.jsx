import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {HomeContainer} from './container/HomeContainer'
import { CaughtContainer } from './container/CaughtContainer';
import { Navbar } from './components/Navbar';
import {PostContainer} from './container/PostContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route component={Navbar} />
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/Pokemons' component={CaughtContainer} />
          <Route path='/:post_id' component={PostContainer} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
