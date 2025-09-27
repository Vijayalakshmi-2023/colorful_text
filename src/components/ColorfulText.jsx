
import React from 'react';

const ColorfulText = ({ text, color }) => {
  return (
    <p className={`text-2xl font-bold ${color}`}>
      {text}
    </p>
  );
};

export default ColorfulText;
