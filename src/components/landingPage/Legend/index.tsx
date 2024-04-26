import legend from '../../../assets/img/legend.png';
import './Legend.css';

function Legend(){
    return (
        <legend className="legend">
            <div className="legend__textContainer">
                <p className="legend__textContainer__text">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo doloribus corrupti, autem placeat, rem repudiandae esse quod natus dolor quasi alias perspiciatis eaque voluptas eligendi!"</p>
                <p className="legend__textContainer__author">Juan Pérez, Periódico "Los Tiempos" 2024</p>
            </div>
            <figure className="legend__picture">
                <img src={legend} alt="" className="legend__img" />
            </figure>
        </legend>
    )
}

export default Legend;