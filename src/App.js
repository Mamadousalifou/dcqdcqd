// src/App.js
import React from "react";
import Name from "./compasant/templete/Name";
import Price from "./compasant/templete/Price";
import Description from "./compasant/templete/Description";
import Image from "./compasant/templete/Image";
import { product } from "./compasant/product";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const { name, price, description, imageUrl } = product;
  const firstName = "Mamadou "; // 

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Image imageUrl={imageUrl} />
        <Card.Body>
          <Name name={name} />
          <Price price={price} />
          <Description description={description} />
        </Card.Body>
      </Card>
      <p>Bonjour, {firstName || "là"}!</p>
      {firstName && <img src={imageUrl} alt="codeur" />}
    </div>
  );
};

export default App;
