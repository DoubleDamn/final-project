import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { About } from './components/About';
import { Home } from './components/Home';
import { Pockemons } from './components/Pockemons';
import { Navbar } from './components/Navbar';
import { Post } from './components/Post';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route component={Navbar} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Pockemons' component={Pockemons} />
          <Route exact path='/about' component={About} />
          <Route path='/:post_id' component={Post} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
