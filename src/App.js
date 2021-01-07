import React from "react";
import Signup from "./components/Signup";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Updateprofile from "./components/Updateprofile";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <BrowserRouter>
    <PrivateRoute path="/" exact component={Dashboard}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/signup" exact component={Signup}/>
    <PrivateRoute path="/update-profile" exact component={Updateprofile}/>
    </BrowserRouter>
  );
}

export default App;
