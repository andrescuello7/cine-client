import { useEffect, useState } from "react";
import { getStorageArray, SubirSesion, TraerSesion } from "../utils/utils";

const useForm = (submit) => {
  const [user, setUser] = useState({ name: "", password: "" });
  const [saveUser, setSaveUser] = useState({});
  const nameUserDate = getStorageArray("usuario");
  const array = nameUserDate.find((usuario, i) => ((i = {}), (usuario = {})));
  const { usuario, contraseña } = user;

  //Para Leer los comandos de inputs
  const handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target["name"];
    const objeto = { ...user, [name]: value };
    setUser(objeto);
  };

  //Submit e iniciar session
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setSaveUser(user);
    usuariodatos();
    //handleOnAdmin();
  };

  //Filtro de Usuarios
  const Session = nameUserDate.find(
    (usuario) =>
      usuario.name === user.name && usuario.password === user.password
  );
  function usuariodatos() {
    if (Session) {
      window.location.href = "/users";
    } else {
      alert("Datos invalido");
    }
  }
  
  
  
  return {
    getStorageArray,
    handleOnChange,
    handleSubmit,
    nameUserDate,
    saveUser,
    array,
    user,
  };
};
export default useForm;
