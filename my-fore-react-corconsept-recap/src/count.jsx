import { useState } from 'react';
import './CountBox.css';

export default function NumberCount() {
  const [up, setUp] = useState(0);

  const UpNumber = () => {
    const addNum = up + 1;
    setUp(addNum);
  };

  const DownNumber = () => {
    const removeNum = up - 1;
    removeNum > 0 ? setUp(removeNum) : setUp(0);
    // setUp(removeNum);
  };

  return (
    <div className="Box">
      <h3>Count Number : {up}</h3>
      <button onClick={UpNumber} className="BoxButton">
        Add Number
      </button>
      <button onClick={DownNumber} className="BoxButton">
        Remove Number
      </button>
    </div>
  );
}
