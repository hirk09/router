import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Aboutus extends Component {
  render() {
    return (
      <nav>
        <ul type="none">
          <li>
            <NavLink to="/">About us</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact us</NavLink>
          </li>
          <li>
            <NavLink to="/message">Message</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
