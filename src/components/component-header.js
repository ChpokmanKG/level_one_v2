import React from 'react';

function ComponentHeader(props) {
  return (
    <div className="people__header all-center">
      <h3>{props.text}</h3>
    </div>
  )
}

export default ComponentHeader;