import { useEffect, useState } from 'react';
import './Effect.css';
import SerialDetails from './EffectSerial';

export default function EffectAllData() {
  const [Details, setDetails] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setDetails(data));
  }, []);

  return (
    <div className="AllBox">
      <h2>All Data : {Details.length}</h2>

      {Details.map(serial => (
        <SerialDetails friend={serial}></SerialDetails>
      ))}
    </div>
  );
}
