import logo from '../../../assets/logo_main.jpg';
import homeIcon from '../../../assets/bxs-home.svg';
import mapIcon from '../../../assets/bxs-map.svg';
import whatsappIcon from '../../../assets/bxs-whatsapp.svg';
import fbIcon from '../../../assets/bxl-facebook.svg';
import instaIcon from '../../../assets/bxl-instagram.svg';
import ttIcon from '../../../assets/bxl-tiktok.svg';
import './Footer.css'

import InfoItem from './InfoItem';
import LinkItem from './LinkItem';
import SocialMediaItem from './SocialMediaItem';
import { removeCurrentUrlPath } from '../../../utils/commonUtils';

function Footer() {
    const infoItems = [
        {
            icon: homeIcon,
            text: 'Calle Ecuador #325 entre Av. Ayacucho y C. Junin'
        },
        {
            icon: mapIcon,
            text: 'Cochabamba - Bolivia'
        },
        {
            icon: whatsappIcon,
            text: ['+591 76453113', '+591 65653232']
        }
    ];

    const linkItems = removeCurrentUrlPath();

    const socialMediaItems = [
        {
            name: 'facebook',
            icon: fbIcon,
            url: 'https://www.facebook.com/AcademiaDeDanzaFortaleza',
        },
        {
            name: 'tiktok',
            icon: ttIcon,
            url: 'https://www.tiktok.com/@academia.fortaleza_'
        },
        {
            name: 'instagram',
            icon: instaIcon,
            url: 'https://www.instagram.com/academia_fortaleza01'
        }
    ]
    return(
        <footer className="footer">
            <div className="footer__right">
                <a href="/">
                    <figure className='footer__logo'>
                        <img src={logo} alt="Logo Academia de Danza Fortaleza" className="footer__logo__img" />
                    </figure>
                </a>
                <div className='footer__info'>
                    {
                        infoItems.map((item, ind) => <InfoItem icon={item.icon} text={item.text} key={`info-${ind}`}/>)
                    }
                </div>
            </div>
            
            <div className="footer__left">
                <div className="footer__links">
                    <div className="footer__links__title title">
                        Explore Nuestro Sitio
                    </div>
                    {
                        linkItems.map(item => <LinkItem key={item.title} title={item.title} href={item.url}/>)
                    }
                </div>
                <div className="footer__socialMedia">
                    <div className="footer__socialMedia__title title">
                        Síguenos en
                    </div>
                    <div className="footer__socialMedia__container">
                        {
                            socialMediaItems.map(
                                item => <SocialMediaItem key={item.name} name={item.name} url={item.url} icon={item.icon}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;