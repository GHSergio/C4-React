import React from "react";
import Form from "../components/form/Form";
import Cart from "../components/Cart";
import "../styles/mainContent.scss";
import { CartProvider } from "../components/CartProvider";
import { FormProvider } from "../components/form/FormProvider";

const MainContent = () => {
  return (
    <>
      <div
        className="site-main"
        style={{
          width: "90%",
          margin: "0  auto",
        }}
      >
        <div className="main-container">
          <CartProvider>
            <FormProvider>
              <Form />
            </FormProvider>
            <Cart />
          </CartProvider>
        </div>
      </div>
    </>
  );
};

export default MainContent;
