import "./App.css";
//Estilos
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//Datos
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Register from "./pages/RegisterPage";
import Users from "./pages/UsersPage";
import Login from "./pages/LoginPage";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/home">
            <Home />
            <Footer />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
