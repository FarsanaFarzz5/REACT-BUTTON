import React, { useState } from 'react';

const ShowHideText = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div><h1>button</h1></div>
      <div>
        <button onClick={toggleVisibility}>
          {isVisible ? 'Hide' : 'Show'} Text
        </button>
        {isVisible && <p>This is the text content that can be shown or hidden.</p>}
      </div>
    </div>
  );
};

export default ShowHideText;
