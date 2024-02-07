import './NavbarLogo.css'
import aguayo from '../../../assets/aguayo.jpg';
import logo_15 from '../../../assets/logo_15.jpg';

function NavbarLogo() {
    return (
        <div className="navbar-logo">
            <div className="aguayo-container">
                <img className="aguayo-img" alt="Fondo de aguayo" src={aguayo}/>
            </div>
            <img className="logo-15-img" src={logo_15} alt="Logo fortaleza 15 años" />
        </div>
    )
}

export default NavbarLogo;