import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ valor }) => {
  const [counter, setCounter] = useState(valor);

  const handleAdd = () => {
    setCounter(counter + 1);
    //setCounter((c) => c + 1);
  };

  const handleSubstract = () => {
    setCounter(counter - 1);
    //setCounter((c) => c + 1);
  };

  const handleReset = () => {
    setCounter(valor);
    //setCounter((c) => c + 1);
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  valor: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  valor: 0,
};
