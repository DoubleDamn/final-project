import React, { Component } from 'react';

class Post extends Component {
  componentDidMount() {
    this.props.getPoke(this.props.match.params.post_id);
  }

  render() {
    const idpoke = this.props.match.params.post_id;
    return (
      <div className='col-sm-12 col-md-6 mx-auto text-center'>
        {this.props.isLoading ? (
          <p className='lead  m-3'>Loading post.. </p>
        ) : (
          <h3 className='card-title text-capitalize m-3'> Pokmon Card </h3>
        )}
        <div className='card bg-light  mb-4 border-info shadow-sm mx-auto p-3'>
          <img
            src={require(`../../pokemons/${idpoke <= 720 ? idpoke : (idpoke % 100) + 1}.png`)}
            alt='Img'
            className='card-img-top img-fluid infoImg'
          />
          <h5 className='card-title text-capitalize'> name: {this.props.pokemon.name}</h5>
          <p> id: {this.props.pokemon.id}</p>
          {this.props.pokemon.date !== '' ? (
            <p> Date: {this.props.pokemon.date}</p>
          ) : (
            <p className='card-text font-bolid'>Not caught</p>
          )}
        </div>
      </div>
    );
  }
}

export default Post;
