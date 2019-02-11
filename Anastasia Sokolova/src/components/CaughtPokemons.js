import React, { Component } from 'react';
import { CardCaught } from './CardCaught';
import { LoadMoreBtn } from './LoadMoreBtn';

class CaughtPokemons extends Component {
  componentDidMount() {
    if(this.props.page === 1) {
    this.props.getLength();
    this.getAllCaught()
    }
  }
  getAllCaught() {
    if (this.props.loadNoMore) return;
    this.props.getAllCaught(this.props.page);
  }

  render() {
    const pok = this.props.pokemons.map(poke => 
    <CardCaught key={poke.id} 
    poke={poke} />);

    return (
      <div className='col-md-12 text-center'>
        <h3 className='col-md-12 text-center text-md-left mt-3 mb-3'>Caught Pokemons</h3>
        <div className=' d-flex justify-content-around align-items-center flex-wrap '>{pok}</div>

        {this.props.loadNoMore ? null : (
          <LoadMoreBtn onClick={this.getAllCaught.bind(this)} isLoading={this.props.isLoading} />
        )}
      </div>
    );
  }
}
export default CaughtPokemons;
