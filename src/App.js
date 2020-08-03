import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProject from "./components/Project/AddProject";
import store from "./store";
import UpdateProject from "./components/Project/UpdateProject";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addProject" component={AddProject} />
            <Route exact path="/updateProject/:id" component={UpdateProject} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
