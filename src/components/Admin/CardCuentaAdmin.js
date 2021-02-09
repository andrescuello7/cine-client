import './Admin.css'

export default function CardCuenta(props) {
    return (
        <div className="form-control m-1">
            <div>
                {props.dato.cuenta}
            </div>
        </div>
    );
}
