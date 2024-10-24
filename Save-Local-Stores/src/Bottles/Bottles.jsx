import { useEffect } from 'react';
import Bottle from './Bottle';
import { useState } from 'react';
import './allBottles.css';
import { addToLS, getStoredCart } from '../Script/localStored';

const Bottles = () => {
  const [WaterBottle, setWaterBottle] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('Bottle.json')
      .then(res => res.json())
      .then(data => setWaterBottle(data));
  }, []);

  useEffect(() => {
    if (WaterBottle.length) {
      const storedCart = getStoredCart();
      // console.log(storedCart, WaterBottle);

      const saveCart = [];
      for (const id of storedCart) {
        console.log(id);

        const Bottle = WaterBottle.find(bottle => bottle.id === id);
        if (Bottle) {
          saveCart.push(Bottle);
        }
      }
      setCart(saveCart);
    }
  }, [WaterBottle]);

  const [PurchaseProduct, setPurchaseProduct] = useState([]);

  const product = WaterBottle => {
    const newPurchaseProduct = [...PurchaseProduct, WaterBottle];
    setPurchaseProduct(newPurchaseProduct);

    addToLS(WaterBottle.id);
  };

  return (
    <div>
      <h3>Bottles :{WaterBottle.length}</h3>

      <h4 className="PurchaseProducts">
        purchase product :
        <span className="ProductsCountNumber">{cart.length}</span>
      </h4>
      <div className="BottlesContainer">
        {WaterBottle.map(bottle => (
          <Bottle key={bottle.id} bottle={bottle} product={product}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
