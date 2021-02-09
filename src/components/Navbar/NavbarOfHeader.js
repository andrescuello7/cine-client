import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import useForm from "../../useForm/useForm";
import NavbarAdmin from './NavbarAdmin'

const NavbarOfHeader = () => {
  const { array, handleOnSubmit, nameUserDate, user } = useForm();
  console.log(user.name)

  return (
    <Navbar>
      <Navbar.Brand href="/home">
        <a href="">
          <img
            className="logo"
            src="https://logos-marcas.com/wp-content/uploads/2020/04/Netflix-Logo.png"
            alt=""
          />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Perfil" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">
              Hello{" "}
              <i>
                <b>{array.name}!!</b>
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
              <a href="/" onClick={handleOnSubmit}>
                Close Session
              </a>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavbarOfHeader;
