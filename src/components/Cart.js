import RemoveCircleSharpIcon from "@mui/icons-material/RemoveCircleSharp";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import "../styles/cart.scss";

let data = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

export default function Cart() {
  let totalPrice = data.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <section className="cart-container ">
        <h3 className="cart-title">購物籃</h3>
        {data.map((item) => {
          return (
            <section className="product-list">
              <div className="product-container ">
                <img className="img-container" src={item.img} />
                <div className="product-info">
                  <div className="product-name">{item.name}</div>
                  <div className="product-control-container">
                    <div className="product-control">
                      <RemoveCircleSharpIcon className="product-action minus"></RemoveCircleSharpIcon>
                      <span className="product-count">{item.quantity}</span>
                      <AddCircleSharpIcon className="product-action plus"></AddCircleSharpIcon>
                    </div>
                  </div>
                  <div className="price">{item.price}</div>
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
          <div className="price">{totalPrice}</div>
        </section>
      </section>
    </>
  );
}
