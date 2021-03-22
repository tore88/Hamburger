import React from "react";
import Styles from "./Burger.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";

const burger = (props) => {
  let ingredients = Object.keys(props.ingredients)
    .map((el) => {
      return [...Array(props.ingredients[el])].map((_, idx) => {
        return <BurgerIngredients key={el + idx} type={el} />;
      });
    })
    .reduce((prev, curr) => {
      return prev.concat(curr);
    });
  if (ingredients.length === 0) {
    ingredients = `Star adding ingredients`;
  }
  return (
    <div className={Styles.Burger}>
      <BurgerIngredients type="bread-top" />
      {ingredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
