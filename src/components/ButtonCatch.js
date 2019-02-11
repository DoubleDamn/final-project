import React from 'react';
export const ButtonCatch = props => {
  return (
    <div className='text-center'>
    
      <button href="#" className='btn btn-success' onClick={props.onClick}>
        Catch me!
      </button>
            {/* {props.poke.caught ? (
        <button className='btn btn-success' onClick={props.onClick}>
          Catch me!
        </button>) :
        (<button className='btn btn-success disabled'>You got it!</button>
      )} */}
    </div>
  );
};
