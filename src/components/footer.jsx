import Button from "react-bootstrap/Button";

const Footer = () => {
    return(
        <div className="contenedor">
            <br />
            <hr/>
            <h2>Collage de animales del zoológico</h2>
            <h4>Todos los derechos reservados</h4>
            <Button variant="info" href="https://pixabay.com/es/">Mas imagenes</Button>
        </div>
    );
};

export default Footer;