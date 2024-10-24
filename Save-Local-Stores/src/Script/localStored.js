const getStoredCart = () => {
  const CheckCart = localStorage.getItem('cart');

  if (CheckCart) {
    return JSON.parse(CheckCart);
  }
  return [];
};

const saveCartToLS = Cart => {
  const CartStringify = JSON.stringify(Cart);
  localStorage.setItem('cart', CartStringify);
};

const addToLS = id => {
  const Cart = getStoredCart();
  Cart.push(id);

  // save to local storage
  saveCartToLS(Cart);
};

export { addToLS, getStoredCart };
