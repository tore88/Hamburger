import React from "react";
import Styles from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";

const burgerIngredients = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "bread-top":
      ingredient = (
        <div className={Styles.BreadTop}>
          <div className={Styles.Seeds1}></div>
          <div className={Styles.Seeds2}></div>
        </div>
      );
      break;
    case "bread-bottom":
      ingredient = <div className={Styles.BreadBottom}></div>;
      break;
    case "meat":
      ingredient = <div className={Styles.Meat}></div>;
      break;
    case "cheese":
      ingredient = <div className={Styles.Cheese}></div>;
      break;
    case "salad":
      ingredient = <div className={Styles.Salad}></div>;
      break;
    case "bacon":
      ingredient = <div className={Styles.Bacon}></div>;
      break;
    default:
      <div></div>;
  }

  return ingredient;
};

export default burgerIngredients;

burgerIngredients.prototype = {
  type: PropTypes.string.isRequired,
};
