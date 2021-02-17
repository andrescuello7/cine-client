import { getStorageArray, setStorage, TraerSesion, SubirSesion, TraerCuenta, SubirCuentaStorage } from "../../utils/utils";
import Card from './CardCuentaAdmin'
import CardUser from './CardUserAdmi'
import './Admin.css'

export default function AdminPage() {
    const datosCuenta = TraerCuenta("cuenta");
    const datosUser = getStorageArray("usuario");
    const Mostrar = datosCuenta.map((cue, i) => (
        <Card dato={cue} key={i} />
      ));
    const MostrarUser = datosUser.map((usuario, i) => (
        <CardUser data={usuario} key={i} />
      ));
    console.log(datosUser)
  return (
    <div className="CambioDeHeigth">
        
        <div className="Traer">
            <i>Usuarios</i>
            <b>{MostrarUser}</b>
        </div>
    </div>
  );
}
