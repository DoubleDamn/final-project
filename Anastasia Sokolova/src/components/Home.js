import React, { Component } from 'react';
import { CardPokemon } from './CardPokemon';
import { LoadMoreBtn } from './LoadMoreBtn';

class Home extends Component {
  componentDidMount() {
    if (this.props.page === 1) {
      this.props.getLength();
      this.getAll();
    }
  }

  onCatch(poke, e) {
    e.preventDefault();
    e.target.setAttribute('disabled', 'true');
    e.target.textContent = 'You got it!';
    e.target.classList.add('btn-lg');
    this.props.catched(poke);
     poke.caught.push(true);
  }
  getAll() {
    if (this.props.loadNoMore) return;
    this.props.getAll(this.props.page);
  }

  render() {
    const pok = this.props.pokemons.map(poke => (
      <CardPokemon key={poke.id} 
     
      poke={poke} click={this.onCatch.bind(this, poke)} />
    ));

    return (
      <div className='col-md-12 text-center'>
        <h3 className='col-md-12 text-center text-md-left mt-3 mb-3'>All Pokemons</h3>
        <div className=' d-flex justify-content-around align-items-center flex-wrap '>{pok}</div>

        {this.props.loadNoMore ? (
          <p> That's all!</p>
        ) : (
          <LoadMoreBtn onClick={this.getAll.bind(this)} isLoading={this.props.isLoading} />
        )}
      </div>
    );
  }
}

export default Home;
