import React from "react";
import Styles from "./BuildControls.module.css";
import BuildControl from "../BuildControl/BuildControl";
import Button from "../../UI/Button/Button";

const buildControls = (props) => {
  const ingredients = [
    { label: `Salad`, types: `salad` },
    { label: `Bacon`, types: `bacon` },
    { label: `Cheese`, types: `cheese` },
    { label: `Meat`, types: `meat` },
  ];

  return (
    <div className={Styles.BuildControls}>
      {/* tofixed2  */}
      <p>Price:{props.price.toFixed(2)} £</p>
      {ingredients.map((el) => {
        return (
          <BuildControl
            label={el.label}
            key={el.label}
            add={() => props.add(el.types)}
            sub={() => props.sub(el.types)}
            disabled={props.disabled[el.types]}
          />
        );
      })}
      <Button disabled={!props.purchase} click={props.purchaseButton}>
        Order Now
      </Button>
    </div>
  );
};

export default buildControls;
