import { useEffect, useState } from 'react';
import './CountBox.css';
import Details from './ItemBox';

export default function SerialItems() {
  const [Items, setItem] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setItem(data));
  }, []);

  return (
    <div className="Box">
      <h2>All Items : {Items.length}</h2>

      {Items.map(serial => (
        <Details details={serial}></Details>
      ))}
    </div>
  );
}
