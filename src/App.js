import React, { Component } from "react";
//import Styles from "./App.module.css";
import Layout from "./Components/Layout/Layout";
import BurgerBuilder from "./Components/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
