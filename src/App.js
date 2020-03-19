import React, { Component } from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Contactus from "./Contactus";
import Aboutus from "./Aboutus";
import Message from "./Message";
import Nav from "./Nav";

export default class App extends Component {
  render() {
    console.log(this.props)
    return (
      <BrowserRouter>
           <Nav />
        <Switch>
          <Route exact path="/message" component={Message} />
          <Route exact path="/contactus" component={Contactus} />
          <Route exact path="/" component={Aboutus} />
        </Switch>
      </BrowserRouter>
    );
  }
}
