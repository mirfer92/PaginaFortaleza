import { ErrorBoundary } from "react-error-boundary";

import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import InstagramGallery from './components/InstagramGallery/index';

function App() {
    return (
        <>
            <Navbar/>
            <Carousel/>
            <InstagramGallery/>
        </>
    )
}

export default App
