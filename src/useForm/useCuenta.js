import { useState } from "react";
import {
  getStorageArray,
  setStorage,
  SubirCuentaStorage,
  TraerCuenta,
} from "../utils/utils";
import Photos from "../components/Cuentas/Photo";

const useCuenta = () => {
  const [cuenta, setCuenta] = useState({ cuenta: " ", img: " " });
  const [show, setShow] = useState(false);
  const UserSessionInitial = getStorageArray("usuario");
  const filtro = UserSessionInitial.filter((i) => i.id);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const SubirCuenta = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const cuentas = TraerCuenta("cuenta");
    const cuentasUp = [...cuentas, cuenta];
    SubirCuentaStorage("cuenta", cuentasUp);
  };
  const CuentaDeUsuario = (e) => {
    const value = e.target.value;
    const name = e.target["name"];
    const objeto = { ...cuenta, [name]: value };
    setCuenta(objeto);
  };

  const articles = TraerCuenta("cuenta");
  const MostrarUsuarios = articles.map((art, i) => (
    <Photos article={art} key={i} />
  ));

  return {
    handleClose,
    handleShow,
    SubirCuenta,
    CuentaDeUsuario,
    filtro,
    articles,
    MostrarUsuarios,
    cuenta,
    show,
  };
};
export default useCuenta;
