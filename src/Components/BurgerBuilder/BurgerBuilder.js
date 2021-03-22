import React, { Component } from "react";
// import Styles from "./burgerBuilder.module.css";
import Burger from "./Burger/Burger";
import Aux from "../hoc/Aux";
import BuildControls from "./BuildControls/BuildControls";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "../Ordersummary/OrderSummary";
import BackDrop from "../UI/BackDrop/BackDrop";

const INGREDIENT_PRICE = {
  salad: 0.4,
  bacon: 0.9,
  cheese: 0.7,
  meat: 1.2,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      meat: 0,
      bacon: 0,
      salad: 0,
    },
    price: 5,
    purchasable: false,
    purchasing: false,
  };

  addIngredients = (type) => {
    const counter = this.state.ingredients[type];
    const newCounter = counter + 1;
    const newState = { ...this.state.ingredients };
    newState[type] = newCounter;
    const totPrice = this.state.price;
    const newPrice = totPrice + INGREDIENT_PRICE[type];
    this.setState({ ingredients: newState, price: newPrice });
    this.purchase(newState);
  };
  removeIngredients = (type) => {
    const counter = this.state.ingredients[type];
    if (counter <= 0) {
      return;
    }
    const newCounter = counter - 1;
    const newState = { ...this.state.ingredients };
    newState[type] = newCounter;
    const price = INGREDIENT_PRICE[type];
    const oldPrice = this.state.price;
    const newPrice = oldPrice - price;
    this.setState({ ingredients: newState, price: newPrice });
    this.purchase(newState);
  };
  purchase = (currentState) => {
    const transfObj = Object.keys(currentState)
      .map((el) => {
        return currentState[el];
      })
      .reduce((prv, curr) => {
        return prv + curr;
      }, 0);

    this.setState({ purchasable: transfObj > 0 });
  };
  purchaseButton = () => {
    this.setState({ purchasing: true });
  };
  notPurchased = () => {
    this.setState({ purchasing: false });
  };
  ordered = () => {
    alert(`Enjoy your burger for free`);
  };
  render() {
    const disabledOpt = { ...this.state.ingredients };
    for (let el in disabledOpt) {
      disabledOpt[el] = disabledOpt[el] <= 0;
    }

    return (
      <Aux>
        {this.state.purchasing ? (
          <Aux>
            <BackDrop click={this.notPurchased} />
            <Modal show={this.state.purchasing}>
              <OrderSummary
                ingredients={this.state.ingredients}
                disabled={this.state.purchasable}
                purchaseButton={this.state.purchasing}
                cancButPurc={this.notPurchased}
                onOrder={this.ordered}
                price={this.state.price}
              />
            </Modal>
          </Aux>
        ) : null}

        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          add={this.addIngredients}
          sub={this.removeIngredients}
          disabled={disabledOpt}
          price={this.state.price}
          purchase={this.state.purchasable}
          purchaseButton={this.purchaseButton}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
