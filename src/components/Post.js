import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  
    state = {
      pockemon: null
    };
  

  componentDidMount() { 
    const id = this.props.match.params.post_id;
    axios.get('http://localhost:3000/pokemons/' + id)
    .then(resp => {  
      this.setState({
        pockemon: resp.data
      });
    });
  }

  render() {
    const pockemon = this.state.pockemon ? (
        <h4> {this.state.pockemon.name} </h4>
    ) : (
      <div> Loading post.. </div>
    );

    return (<div>{pockemon}</div>);
  }
}

export { Post };
