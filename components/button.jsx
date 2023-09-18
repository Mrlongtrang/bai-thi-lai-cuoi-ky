import React from 'react'

const Button = ({ text, background, width, height, color }) => {
  return (
    <button
        style={{
        background,
        width,
        height,
        color,    
        }}
        >
         {text}
    </button>
  );
};

export default Button;