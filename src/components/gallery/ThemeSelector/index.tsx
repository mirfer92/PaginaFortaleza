import useGalleryTheme from "../../../state/theme";
import ThemeOption from "./ThemeOption";
import './ThemeSelector.css'

function ThemeSelector() {
    const { setClassic, setCarousel } = useGalleryTheme();

    return (
        <div className="galleryThemeSelector">
            <h4 className="galleryThemeSelector__title">Tema de la Galería</h4>
            <ThemeOption option={'classic'} getter={setClassic}/>
            <ThemeOption option={'carousel'} getter={setCarousel}/>
        </div>
    )
}

export default ThemeSelector;