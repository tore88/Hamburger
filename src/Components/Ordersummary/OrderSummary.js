import React from "react";
import Aux from "../hoc/Aux";
import Styles from "./OrderSummary.module.css";
import Button from "../UI/Button/Button";

const OrderSummary = (props) => {
  const orderList = Object.keys(props.ingredients).map((el, idx) => {
    return (
      <li key={el + idx}>
        {el}:{props.ingredients[el]}
      </li>
    );
  });

  return (
    <Aux>
      <h2>$ {props.price}</h2>
      <h2>Order Summary:</h2>
      <p>Your burger ingredients</p>
      <ul className={Styles.list}>{orderList}</ul>
      <Button disabled={!props.disabled} click={props.cancButPurc}>
        Cancel
      </Button>
      <Button disabled={!props.disabled} click={props.onOrder}>
        Press to Order
      </Button>
    </Aux>
  );
};

export default OrderSummary;
