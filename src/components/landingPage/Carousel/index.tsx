import './Carousel.css';
import main from '../../../assets/main.jpg';

function Carousel() {
    return (
        <div className="carousel">
            <img src={main} alt="Fondo Carrusel Fortaleza" />
        </div>
    )
}

export default Carousel;