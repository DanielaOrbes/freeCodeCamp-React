import React from "react";
import '../stylesheets/Testimonio.css'

function Testimonio() {
  return (
    <div className="box-testimonio">
      <img
        className="img-testimonio"
        src={require("../img/emma.png")}
        alt="Imagen de Emma"
      />
      <div className="box-text">
        <p className="name-testimonio">Emma Bostian en Suecia</p>
        <p className="cargo-testimonio">Ingeniero de software en Spotify</p>
        <p className="text-testimonio">"Siempre me ha costado aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>
      </div>

    </div>
  );
}

export default Testimonio;