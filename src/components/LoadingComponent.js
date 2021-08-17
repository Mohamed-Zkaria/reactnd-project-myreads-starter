import React from 'react';

const style = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  border: '10px Solid darkgreen',
  borderTop: '10px Solid LimeGreen',
  animation: 'rotation 1.5s infinite linear',
  margin: '50px auto',
};

function Loading() {
  return <div style={style}></div>;
}

export default Loading;