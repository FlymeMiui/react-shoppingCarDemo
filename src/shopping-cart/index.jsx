import React, { Component } from "react";
import "./index.css";
export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navList: ["home", "product", "center"],
    };
  }
  render() {
    let { navList } = this.state;
    return (
      <div className="page">
        <header>购物车</header>
        <main className="list-container">
          <ul>
            <li>
              <img src="product-pic" alt="" />
            </li>
          </ul>
        </main>
        <footer>
          <ul>
            {navList.map((navText) => (
              <li key={navText}>{navText}</li>
            ))}
          </ul>
        </footer>
      </div>
    );
  }
}
