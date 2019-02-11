import React from 'react';

export const LoadMoreBtn = props => {
  if (props.isLoading) {
    return <p className='lead'>Loading...</p>;
  }
  return (
    <button onClick={props.onClick} className='btn btn-outline-danger mb-3 mx-1'>
      Load more
    </button>
  );
};
