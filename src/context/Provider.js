// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [getCars, setCar] = useState({
    cars: {
      blueCar: false,
      redCar: false,
      yellowCar: false,
    }
  });

  const moveCar = (car, side) => {
    setCar({ [car]: side });
  };

  const updateState = () => (
    {
      ...getCars,
      moveCar: moveCar,
    }
  );

    return (
      <CarsContext.Provider value={updateState()}>
        {children}
      </CarsContext.Provider>
    );
}


Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
