// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [getCar, setCar] = useState({
    cars: {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    },
  });
  const [getSignal, setSignal] = useState({
    signal: {
      color: 'red',
    }
  })

  const moveCar = (car, side) => {
    setCar({
        ...getCar,
        [car]: side,
    });
  };

  const changeSignal = (signalColor) => {
    setSignal({
        ...getSignal,
        color: signalColor,
    });
  };

  
  const context = () => ({
    ...getCar,
    ...getSignal,
    moveCar: moveCar,
    changeSignal: changeSignal,
  });

  return (
    <CarsContext.Provider value={context()}>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
