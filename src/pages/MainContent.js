import React from "react";
import Form from "../components/form/Form";
import Cart from "../components/Cart";
import "../styles/mainContent.scss";

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
          <Form />
          <Cart />
        </div>
      </div>
    </>
  );
};

export default MainContent;
