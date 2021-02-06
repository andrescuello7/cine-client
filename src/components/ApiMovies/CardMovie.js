import React from "react";
import "./Card.css";

export default function CardMovie(props) {
  return (
    <div>
      <div className="body">
        <div className="container">
          <div className="card">
            <div className="imgBx">
              <img
                src="https://sistema.bluemotors.com.ar//img/December-2017/2017-12-29-16:50:52-1900x120048.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <h2>Card One</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, tempore. Quae at optio fuga recusandae nihil. Officiis,
                placeat animi explicabo facere, est aliquam, nesciunt itaque
                veritatis odio quaerat tenetur tempore!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
