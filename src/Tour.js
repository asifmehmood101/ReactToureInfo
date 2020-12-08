import React, { useState } from 'react';

const Tour = ({ id, name, info, price, image, RemoveTour }) => {
  const [ReadMore, setReadmore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
        </div>
        <p>
          {ReadMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => {
              setReadmore(!ReadMore);
            }}
          >
            {ReadMore ? 'less' : 'More'}
          </button>
        </p>
        <button
          className='delete-btn'
          onClick={() => {
            RemoveTour(id);
          }}
        >
          Not intrested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
