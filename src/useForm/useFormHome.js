import { useEffect, useState } from "react";
import Axios from "axios";
import CardPeli from "../components/ApiMovies/CardPeli";

const useFormHome = (submit) => {
  const [peli, setPeli] = useState([]);
  const [input, setInput] = useState("");
  const [ouput, setOuput] = useState("harry");

  useEffect(() => {
    axiosPeli();
    setOuput(ouput);
  }, [ouput]);

  const axiosPeli = async () => {
    try {
      const datos = await Axios.get(
        `http://www.omdbapi.com/?apikey=446f8c0f&s=${ouput}`
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
  return {
    axiosPeli,
    guardar,
    subir,
    peli,
  };
};
export default useFormHome;
