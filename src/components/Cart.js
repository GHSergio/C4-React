import RemoveCircleSharpIcon from "@mui/icons-material/RemoveCircleSharp";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import "../styles/cart.scss";

export default function Cart() {
  const { data, increaseHandler, decreaseHandler, cartTotal } =
    useContext(CartContext);
  return (
    <>
      <section className="cart-container ">
        <h3 className="cart-title">購物籃</h3>
        {data.map((item) => {
          return (
            <section className="product-list">
              <div className="product-container ">
                <img className="img-container" src={item.img} alt="" />
                <div className="product-info">
                  <div className="product-name">{item.name}</div>
                  <div className="product-control-container">
                    <div className="product-control">
                      <RemoveCircleSharpIcon
                        className="product-action minus"
                        onClick={() => decreaseHandler(item.id)}
                      ></RemoveCircleSharpIcon>
                      <span className="product-count">{item.quantity}</span>
                      <AddCircleSharpIcon
                        className="product-action plus"
                        onClick={() => increaseHandler(item.id)}
                      ></AddCircleSharpIcon>
                    </div>
                  </div>
                  <div className="price">${item.price}</div>
                </div>
              </div>
            </section>
          );
        })}
        <section className="cart-info shipping col col-12">
          <div className="text">運費</div>
          <div className="price">免費</div>
        </section>
        <section className="cart-info total col col-12">
          <div className="text">小計</div>
          <div className="price">${cartTotal}</div>
        </section>
      </section>
    </>
  );
}
