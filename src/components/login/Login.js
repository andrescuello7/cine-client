import { Form, Button, Nav } from "react-bootstrap";
import "./Login.css";
import { NavLink } from "react-router-dom";
import useForm from "../../useForm/useForm";
import { useState } from 'react'

const Login = ({ loginAsAdmin }) => {
  const userSesion = {
    name: "",
    password: "",
  };
  const { handleOnChange, handleSubmit, user } = useForm(
    userSesion
  );
  const handleOnAdmin = () => {
    const idAdmin= user.name === 'pelis' && user.password === '123';
    if (idAdmin) {
      loginAsAdmin()
      console.log('correcto')
    }
  };
  handleOnAdmin()
  
  return (
    <div className="Login">
      <div className="LoginCard">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Ingrese usuario</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Usuario"
              onChange={handleOnChange}
            />
            <Form.Text className="text-muted">
              Nunca compartiremos su correo electrónico con nadie más.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Me echa un vistazo" />
          </Form.Group>
          <Button className="btn btn-primary w-100 mt-2" type="submit">
            <b>Iniciar Sesion</b>
          </Button>
        </Form>
        <Nav.Link class="text-center mt-2" as={NavLink} to="/register">
          <i>Aun no tienes cuenta?, registrate gratuitamente</i>
        </Nav.Link>
      </div>
    </div>
  );
};
export default Login;
