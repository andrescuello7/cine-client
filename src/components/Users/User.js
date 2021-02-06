import { Form, Button, Modal } from "react-bootstrap";
import useCuenta from "../../useForm/useCuenta";
import "../Cuentas/Photo.css";

export default function User() {
  const {
    handleClose,
    handleShow,
    SubirCuenta,
    CuentaDeUsuario,
    filtro,
    MostrarUsuarios,
    show,
  } = useCuenta();
  console.log(filtro[0]);
  return (
    <div className="w-100">
      <div>
        <Modal show={show} onHide={handleClose}>
          <Form onSubmit={SubirCuenta}>
            <Modal.Header closeButton>
              <Modal.Title>Usuario Nuevo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre de Usuario</Form.Label>
                <Form.Control
                  type="text"
                  name="cuenta"
                  placeholder="Usuario"
                  onChange={CuentaDeUsuario}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  type="text"
                  name="img"
                  placeholder="Usuario"
                  onChange={CuentaDeUsuario}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Cuenta Administradora?" />
                <Form.Check type="checkbox" label="Es menor de 18?" />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn btn-primary" type="submit">
                <b>Agregar</b>
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
      <div className="TotalCuenta">
        <>{MostrarUsuarios}</>
        <div className="cuenta">
          <a className="AgregarButton text-center" onClick={handleShow}>
            <b>+</b>
          </a>
        </div>
      </div>
    </div>
  );
}
