import { RiInstagramFill } from '@remixicon/react';

import './Header.css';
import legend from '../../../assets/legend.png';
import { Fragment } from 'react';

interface headerParams {
    data: {
        key: string,
        title: string,
        legend: string,
        url?: string,
        pageName?: string
    },
    isExternal: boolean
}

function Header(props: headerParams) {
    const logoMap: Map<string, JSX.Element> = new Map([
        ['instagram', <RiInstagramFill size={0}/>]
    ]);

    const selectedLogo = logoMap.get(props.data.key) || <></>;
    const finalLegend = props.data.legend.split('\n');

    return (
        <header className='galleryHeader'>
            <div className="galleryHeader__hero">
                <div className="galleryHeader__hero__textContainer">
                    <h1 className="galleryHeader__hero__title">{props.data.title}</h1>
                    <p className="galleryHeader_hero__legend">
                        {finalLegend.map(
                            (line, ind) => <Fragment key={ind}>{line} <br/></Fragment>
                        )}
                    </p>
                </div>
                <div className="galleryHeader__hero__picture">
                    <img src={legend} alt={props.data.title} />
                    {
                        props.isExternal ?
                            <div className='galleryHeader__linkContainer'>
                                Para más contenido síguenos en&nbsp;
                                <a href={props.data.url} className='gallery__link'>
                                    {props.data.pageName} {selectedLogo}
                                </a>
                            </div>
                            :
                            <></>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;