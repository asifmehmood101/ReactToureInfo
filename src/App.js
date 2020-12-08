import React, { useState, useEffect, createFactory } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoadding, setIsloading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    setTours((prev) => {
      const newTours = prev.filter((tour) => tour.id !== id);
      return newTours;
    });
  };

  useEffect(() => {
    //fetching data from json
    const FetchData = async () => {
      try {
        const res = await fetch(url);
        const tourDetail = await res.json();
        setIsloading(false);
        setTours(tourDetail);
      } catch (error) {
        setIsloading(false);
        setIsError(true);
        console.log(error);
      }
    };
    FetchData();
  }, []);
  if (isLoadding) {
    return <Loading />;
  } else if (isError) {
    return <h1>Error...</h1>;
  } else if (tours.length === 0) {
    return <h1>Nothing left</h1>;
  } else {
    return (
      <main>
        <Tours TD={tours} RemoveTour={removeTour} />;
      </main>
    );
  }
}

export default App;
