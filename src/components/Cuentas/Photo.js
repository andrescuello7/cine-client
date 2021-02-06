import "./Photo.css";

const Photo = (props) => {
  return (
    <div className="Total">
      <div className="Contenido">
        <a href="/home">
          <img src="/" alt="" />
          <div className="Imagen">
            <img src={props.article.img} alt="" className="img-fluid" />
          </div>
        </a>
        <h5 className="m-2">{props.article.cuenta}</h5>
      </div>
    </div>
  );
};
export default Photo;
