import { useParams } from "react-router-dom";
import { getGalleryDataByKey } from "../../utils/commonUtils";
import InstagramGallery from "../../components/gallery/InstagramGallery";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Header from "../../components/gallery/Header";
import ThemeSelector from "../../components/gallery/ThemeSelector";

function Gallery() {
    const { keyParam } = useParams();
    const key = keyParam || '';
    const galleryData = getGalleryDataByKey(key);
    return(
        <>
            <Navbar/>
            <Header data={galleryData} isExternal={true}/>
            <ThemeSelector/>
            <InstagramGallery/>
            <Footer/>
        </>
    )
}

export default Gallery;