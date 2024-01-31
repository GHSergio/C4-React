import { useState, useEffect } from "react";
import { CartContext } from "./CartContext.js";

export const CartProvider = ({ children }) => {
  let initialData = [
    {
      id: "1",
      name: "貓咪罐罐",
      img: "https://picsum.photos/300/300?text=1",
      price: 100,
      quantity: 1,
    },
    {
      id: "2",
      name: "貓咪干干",
      img: "https://picsum.photos/300/300?text=2",
      price: 200,
      quantity: 1,
    },
  ];

  const [data, setData] = useState(initialData);
  const [cartTotal, setCartTotal] = useState(0);

  const increaseHandler = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseHandler = (id) => {
    setData(
      data.map((item) =>
        item.id === id && item.quantity > 1 //並且quantity不能小於1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  useEffect(() => {
    //reduce對data內每個item指定屬性 累加
    let total = data.reduce((sum, item) => {
      const itemTotal = item.price * item.quantity;
      return sum + itemTotal;
    }, 0); //0是預設初始值 --> sum
    setCartTotal(total);
  }, [data]); //data為依賴的數據

  return (
    <CartContext.Provider
      value={{
        data,
        setData,
        increaseHandler,
        decreaseHandler,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
