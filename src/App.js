import "./App.css";
import { useState } from 'react'
//Estilos
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//Datos
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Register from "./pages/RegisterPage";
import Users from "./pages/UsersPage";
import Login from "./pages/LoginPage";
import Admin from "./pages/AdminPages";
import Footer from "./components/Footer/Footer";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  console.log('is admin', isAdmin)

  return isAdmin ? <AdminRoutes /> : <UserRoutes loginAsAdmin={() => setIsAdmin(true)} />;
};

function AdminRoutes() {
  return (
      <div>
        <Admin />
        <Footer />
      </div>
  );
}

function UserRoutes(props) {
  const { loginAsAdmin } = props;
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login loginAsAdmin={loginAsAdmin} />
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
  );
}

export default App;
