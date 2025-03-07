import GoogleMapReact from 'google-map-react';
import "./Map.css";
import { RiMapPin2Fill } from "@remixicon/react";

interface LocationPinProps {
    text: string;
    lat: number;
    lng: number
}

function MyMap() {
    const location = {
        address: "Calle Ecuador #178 entre Av. Ayacucho y C. Junin",
        lat: -17.390277777778,
        lng: -66.160000000000,
    };
      
    const LocationPin = (props: LocationPinProps) => (
        <div className="infoContainer__map__googleMap__pin">
            <RiMapPin2Fill size={0} className="infoContainer__map__googleMap__pinIcon" />
            <p className="infoContainer__map__googleMap__pinText">{props.text}</p>
        </div>
    );
    
    return(
        <div className="infoContainer__map">
            <h2 className="infoContainer__map__title">Visítanos en la Academia</h2>
            <div className="infoContainer__map__googleMap">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_KEY }}
                    defaultCenter={location}
                    defaultZoom={17}>
                    <LocationPin
                        lat={location.lat}
                        lng={location.lng}
                        text={location.address}
                    />
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default MyMap;