import Footer from '../../components/common/Footer';
import Navbar from '../../components/common/Navbar';
import Carousel from '../../components/landingPage/Carousel';
import GalleriesContainer from "../../components/landingPage/GalleryLinkContainer";
import Legend from '../../components/landingPage/Legend';

function LandingPage() {
    return (
        <>
            <Navbar/>
            <Carousel/>
            <GalleriesContainer/>
            <Legend/>
            <Footer/>
        </>
    )
}

export default LandingPage;