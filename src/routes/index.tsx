import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LandingPage from "../views/LandingPage";
import ContactUs from "../views/ContactUs";
import Gallery from "../views/Gallery";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage/>
    },
    {
        path: '/contacto',
        element: <ContactUs/>
    },
    {
        path: '/galeria/:isExternal/:key',
        element: <Gallery/>
    },
]);

const Routes = () => <RouterProvider router={router}/>;

export default Routes;