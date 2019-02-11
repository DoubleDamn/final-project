import React from 'react';
export const ButtonCatch = props => {
  return (
    <div className='text-center'>
      {props.poke.caught.length > 0 ? (
        <button className='btn btn-success disabled btn-block btn-lg' disabled>
          You got it!
        </button>
      ) : (
        <button className='btn btn-success btn-lg' onClick={props.onClick}>
          Catch me!
        </button>
      )}

    </div>
  );
};
