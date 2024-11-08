import PropTypes from 'prop-types';

const SinglePrice = ({ gym }) => {
  // console.log(gym);
  const { title, price, features } = gym;
  return (
    <div className="flex flex-col border bg-slate-700 rounded-lg text-white p-5">
      <p>
        <span className="text-5xl font-bold">{price}</span>/mon
      </p>
      <p className="text-2xl mt-4 mb-2">{title}</p>

      <div className="flex-grow">
        {features.map((List, index) => (
          <li key={index}>{List}</li>
        ))}
      </div>

      <button className="mt-10 btn w-full text-xl text-slate-700 font-bold">
        Bye
      </button>
    </div>
  );
};

SinglePrice.propTypes = {
  gym: PropTypes.object,
};
export default SinglePrice;
