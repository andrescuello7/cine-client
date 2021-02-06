import { useEffect, useState } from "react";
import { getStorageArray, SubirSesion, TraerSesion } from "../utils/utils";

const useForm = (submit) => {
  const [user, setUser] = useState({ name: "", password: "" });
  const [saveUser, setSaveUser] = useState({});
  const [sesion, setSesion] = useState(Boolean);
  const nameUserDate = getStorageArray("usuario");
  const array = nameUserDate.find((usuario, i) => ((i = {}), (usuario = {})));
  // const { usuario, contraseña } = user;

  const Session = nameUserDate.find(
    (usuario) =>
      usuario.name === user.name && usuario.password === user.password
  );
  useEffect(() => {
    SubirSesion("sesion", sesion);
  }, []);
  function usuariodatos() {
    if (Session) {
      window.location.href = "/users";
      setSesion(true);
    } else {
      alert("Datos invalido");
    }
  }
  const handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target["name"];
    const objeto = { ...user, [name]: value };
    setUser(objeto);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setSaveUser(user);
    usuariodatos();
  };
  const handleOnSubmit = () => {
    setSesion(true);
  };
  return {
    getStorageArray,
    handleOnChange,
    handleSubmit,
    handleOnSubmit,
    nameUserDate,
    saveUser,
    sesion,
    array,
    user,
  };
};
export default useForm;
