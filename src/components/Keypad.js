import React from 'react';

const Keypad = () => {
  const handleChange = () => {
    console.log('Entering password...');
  };

  return (
    <div>
      <label>Password:</label>
      <input type="password" onChange={handleChange} />
    </div>
  );
};

export default Keypad;