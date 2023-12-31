import React, { useEffect, useState } from "react";
import "../Products.css";
function Product({ products,onItemChange,x,PsubTotal ,subTotalChange}) {
  const [cartItems, setCartItems] = useState([]);
  const [subTotal,setSubTotal] = useState(PsubTotal);
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.name === product.name);

    if (existingItem) {
      // If the item already exists in the cart, increase its quantity
      const updatedCart = cartItems.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setSubTotal(subTotal+product.price);
      subTotalChange(subTotal+product.price);
      setCartItems(updatedCart);
      onItemChange(updatedCart);

    } else {
      // If the item doesn't exist in the cart, add it with quantity 1
      setSubTotal(subTotal+product.price);
      subTotalChange(subTotal+product.price);
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      onItemChange([...cartItems, { ...product, quantity: 1 }]);
    }
  };
useEffect(() => {
    console.log('called');
    if(x.length > 0) {
  setCartItems(x);
    }
    else{
        setCartItems([]);
 
    }
    
}, [x])
useEffect(() => {
    if(PsubTotal!=0){
    setSubTotal(PsubTotal)
    }
    
}, [x])
console.log(subTotal);
  return (
    <div>
      {products.map((item, index) => (
        <div key={index} style={{ display: "inline-block", width: "16.6%" }}>
          <div
            className="container"
            style={{ backgroundImage: `url(${item.image})` }}
            onClick={() => {
              addToCart(item);
            }}
          >
            <div class="content">
              <p>{item.name}</p>
              <div class="tooltip">{item.price}</div>
              <div class="tooltip">{item.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
