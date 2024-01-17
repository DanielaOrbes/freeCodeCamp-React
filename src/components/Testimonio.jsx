
import '../stylesheets/Testimonio.css'

function Testimonio(props) {

  return (

    <div className="box-testimonio">

      <img
        className="img-testimonio"
        src={require(`../img/${props.img}.png`)}
        alt="Imagen de Emma"
      />

      <div className="box-text">

        <p className="name-testimonio"><strong>{props.name}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="text-testimonio">"{props.testimonio}"</p>

      </div>

    </div>
  );
}

export default Testimonio;