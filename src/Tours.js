import React from 'react';
import Tour from './Tour';
const Tours = ({ TD, RemoveTour }) => {
  return (
    <div className='container'>
      <div className='title'>
        <h2>ours Tours</h2>
        <div className='underline' />
        <div>
          {TD.map((tour) => {
            console.log(tour);
            return <Tour key={tour.id} {...tour} RemoveTour={RemoveTour} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Tours;
