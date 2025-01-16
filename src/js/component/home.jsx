import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const Contador = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1); 
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

 
  const counterDigits = counter.toString().padStart(4, '0').split('');
  
  return (
    <div className="container text-center contenedor">
      <div className="row">
        <div className="col">
          <FontAwesomeIcon icon={faClock} /> 
        </div>
        {counterDigits.map((digit, index) => (
          <div key={index} className="col">
            {digit} 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contador;
