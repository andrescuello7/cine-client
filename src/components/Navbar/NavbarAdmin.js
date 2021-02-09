import {
    Navbar,
    Nav,
    NavDropdown,
    Button,
    Form,
    FormControl,
  } from "react-bootstrap";
import useForm from "../../useForm/useForm";

const NavbarAdmin = () =>{
    return(
        <NavDropdown title="Perfil" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">
              Hello{" "}
              <i>
                Hola Administrador
              </i>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.1">
              <a href="/home">Home</a>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <a href="#">Movies</a>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              <a href="/users">Cuentas</a>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              <a href="/">
                Close Session
              </a>
            </NavDropdown.Item>
          </NavDropdown>
    )
}
export default NavbarAdmin;
