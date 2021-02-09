import './Admin.css'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function CardCuenta(props) {
    return (
        <div className="form-control m-1 p-2 d-flex justify-center">
            <div>
                {props.data.name}
            </div>
        </div>
    );
}


