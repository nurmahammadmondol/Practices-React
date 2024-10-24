import './allBottles.css';

const Bottle = ({ bottle, product }) => {
  // console.log(bottle);
  const { name, price, img, stock } = bottle;

  return (
    <div className="BottleContain">
      <h4>Name : {name}</h4>
      <p>Price :{price}</p>
      <p>Stock :{stock}</p>
      {/* <img src={img} alt="" /> */}

      <button onClick={() => product(bottle)} className="Button">
        Purchase
      </button>
    </div>
  );
};

export default Bottle;
