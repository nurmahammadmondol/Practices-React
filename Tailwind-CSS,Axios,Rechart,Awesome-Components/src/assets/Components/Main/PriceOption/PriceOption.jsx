import { useEffect, useState } from 'react';
import SinglePrice from '../SinglePrice';

const PriceOption = () => {
  const [gymDetails, setGymDetails] = useState([]);

  useEffect(() => {
    fetch('Gym.json')
      .then(res => res.json())
      .then(data => setGymDetails(data));
  }, []);

  return (
    <div>
      <div className="my-20">
        <h2 className="text-4xl font-extrabold ">Best price in the Town</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-5">
          {gymDetails.map(gym => (
            <SinglePrice key={gym.id} gym={gym}></SinglePrice>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceOption;
