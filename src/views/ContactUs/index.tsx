import Navbar from '../../components/common/Navbar';
import Contact from '../../components/contactUs/Contact';
import Footer from '../../components/common/Footer';
import Comments from '../../components/contactUs/Comments/Comments';


function ContactUs() {
    return (
        <>
            <Navbar/>
            <Contact/>
            <Comments/>
            <Footer/>
        </>
    )
}

export default ContactUs;