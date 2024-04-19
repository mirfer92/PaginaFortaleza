import useGalleryTheme from "../../../../state/theme";
import { capitalize } from "../../../../utils/commonUtils";

interface ThemeOptionProps{
    option: string,
    getter: any
}

function ThemeOption(props: ThemeOptionProps){
    const { theme } = useGalleryTheme();
    return(
        <div
            className="galleryThemeSelector__option"
            onClick={props.getter}
            style={
                theme === props.option ?
                    {
                        fontSize: '1.1em',
                        color: 'var(--aqua-fortaleza)'
                    } :
                    {}
            }
        >
            <input 
                type='radio'
                className="galleryThemeSelector__option__radio"
                value={props.option}
                checked={theme === props.option}
                onChange={props.getter}
            />
            {capitalize(props.option)}
        </div>
    )
}

export default ThemeOption;