import "../Header/Header.css";
import Modal from "../Header/modal/modal";
import useFormHome from "../../useForm/useFormHome";
import CardPeli from "../ApiMovies/CardPeli";

export default function Header() {
  const { guardar, subir, peli } = useFormHome();
  const mapKey = peli.map((peli, i) => (
    <CardPeli Title={peli.Title} Imagen={peli.Poster} />
  ));
  return (
    <div>
      <header>
        <a href="">
          <img
            className="logo"
            src="https://logos-marcas.com/wp-content/uploads/2020/04/Netflix-Logo.png"
            alt=""
          />
        </a>
        <ul className="navigation">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Tv Shows</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="/Register">Register</a>
          </li>
          <li>
            <a href="/Login">Login</a>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Search" onChange={guardar} />
          <a onClick={subir}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </a>
        </div>
      </header>
      <div className="banner">
        <img
          src="https://ca-times.brightspotcdn.com/dims4/default/5464a5f/2147483647/strip/true/crop/2275x1076+0+0/resize/1486x703!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fdf%2F53%2Fc2a293c9430c91157f513ab03916%2Fla-photos-1staff-la-ca-mulan-movie-856.JPG"
          className="bg"
        />
        <div className="content">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/ddb5lkc-c37d95a6-5bdf-46d7-aeb1-a5b795804734.png/v1/fill/w_1168,h_684,strp/mulan__2020__logo_png_by_mintmovi3_ddb5lkc-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03NTAiLCJwYXRoIjoiXC9mXC84NDZhOTA4Ni04YTQwLTQzZTAtYWExMC0yZmM3ZDZkNzM3MzBcL2RkYjVsa2MtYzM3ZDk1YTYtNWJkZi00NmQ3LWFlYjEtYTViNzk1ODA0NzM0LnBuZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.EprmVKWlTpdnYHD_S8J240V4dq9FGL67JwkbA-TMbWs"
            className="movieTitle"
          />
          <h4>
            <span>2020</span>
            <span>
              <i>12+</i>
            </span>
            <span>1h 55min</span>
            <span>Action</span>
          </h4>
          <p>
            El ejército de los Hunos, encabezado por el malvado Shun Yiu, quiere
            conquistar China. El emperador obliga a todos los varones a
            alistarse en el Ejército para proteger el imperio. Por otra parte,
            Mulán es una chica joven y valiente que vive en una aldea. Su padre
            está enfermo pero a pesar de ello quiere luchar por su país. Mulán
            no lo va a consentir y se fugará de casa con la intención de hacerse
            pasar por un chico y combatir en lugar de su padre.
          </p>
          <div className="buttons">
            <a href="">
              <i className="fa fa-play" aria-hidden="true"></i>Play
            </a>
            <Modal />
          </div>
        </div>
      </div>
      <div>
        <div className="CardKeyPeli">{mapKey}</div>
      </div>
    </div>
  );
}
