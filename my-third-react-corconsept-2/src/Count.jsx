import { useState } from 'react';
import './Count.css';

export default function CountAddedOrRemove() {
  const [up, setUp] = useState(0);

  const CountAdd = () => {
    const AddNum = up + 1;

    setUp(AddNum);
  };

  const CountRemove = () => {
    const RemoveNum = up - 1;
    RemoveNum > 0 ? setUp(RemoveNum) : setUp(0);
    // setUp(RemoveNum);
  };

  return (
    <div className="countDownBox">
      <h3>Count Down : {up}</h3>

      <button onClick={CountAdd} className="AddedButton">
        Add
      </button>

      <button onClick={CountRemove} className="RemoveButton">
        Remove
      </button>
    </div>
  );
}
