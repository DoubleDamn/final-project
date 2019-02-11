import React from 'react';
import { Link } from 'react-router-dom';
export const CardCaught = (props) => {

        return (
          <div className='card bg-light mb-4 border-success shadow-sm mx-auto p-3 text-center'>
            <Link to={'/' + props.poke.id}>
              <img
                src={require(`../../pokemons/${props.poke.id <= 720 ? props.poke.id : (props.poke.id % 100) + 1}.png`)}
                alt='Img'
                className='card-img-top img-fluid pokeImg'
              />
            </Link>
            <p> Date: {props.poke.date} </p>
      
            <h5 className='card-title text-capitalize'>{props.poke.name}</h5>
            
          </div>
        );
      };
      