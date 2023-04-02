import React from 'react';

const Pic = ({url}) => {
    console.log(url)
  return (
    <div>
      <img src={url} alt="pic" />
    </div>
  );
}

export default Pic;
