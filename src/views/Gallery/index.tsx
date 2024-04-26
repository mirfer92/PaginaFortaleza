import { useParams } from "react-router-dom";
import { getGalleryDataByKey } from "../../utils/commonUtils";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Header from "../../components/gallery/Header";
import ThemeSelector from "../../components/gallery/ThemeSelector";
import GalleryViewer from "../../components/gallery/GalleryViewer";

function Gallery() {
    const { isExternal, key } = useParams();
    const galleryKey = key || '';
    const isExternalGallery: boolean = isExternal === 'externa' ? true : false;
    const galleryData = getGalleryDataByKey(galleryKey, isExternalGallery);
    
    return(
        <>
            <Navbar/>
            <Header data={galleryData} isExternal={isExternalGallery}/>
            <ThemeSelector/>
            <GalleryViewer
                galleryKey={galleryKey}
                isExternal={isExternalGallery}
                url={galleryData.url}
                files={galleryData.files}
            />
            <Footer/>
        </>
    )
}

export default Gallery;