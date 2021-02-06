import { useEffect, useState } from "react";
import Axios from "axios";

const useFormHome = (submit) => {
  const [peli, setPeli] = useState([]);
  const [input, setInput] = useState("");
  const [ouput, setOuput] = useState("harry");
  const [page, setpage] = useState(1);

  useEffect(() => {
    axiosPeli();
    setOuput(ouput);
    if (page < 1) {
      alert("No hay mas peliculas");
    }
  }, [ouput, page]);

  const axiosPeli = async () => {
    try {
      const datos = await Axios.get(
        `http://www.omdbapi.com/?apikey=446f8c0f&s=${ouput}&page=${page}`
      );
      setPeli(datos.data.Search);
    } catch (error) {
      console.log(error);
    }
  };
  const guardar = (e) => {
    setInput(e.target.value);
  };
  const subir = () => {
    setOuput(input);
  };
  const pageClick = () => {
    setpage(page + 1);
  };
  const pageSubmit = () => {
    setpage(page - 1);
  };
  return {
    axiosPeli,
    guardar,
    subir,
    pageClick,
    pageSubmit,
    peli,
    page,
  };
};
export default useFormHome;
