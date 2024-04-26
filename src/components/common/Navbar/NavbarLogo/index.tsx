import './NavbarLogo.css';
import aguayo from '../../../../assets/img/aguayo.jpg';
import logo_15 from '../../../../assets/img/logo_15.jpg';

function NavbarLogo() {
    return (
        <div className="navbar__logo">
            <div className="navbar__logo__aguayoContainer">
                <img className="navbar__logo__aguayoContainer__image" alt="Fondo de aguayo" src={aguayo}/>
            </div>
            <img className="navbar__logo__aguayoContainer__logo15" src={logo_15} alt="Logo fortaleza 15 años" />
        </div>
    )
}

export default NavbarLogo;