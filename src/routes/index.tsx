import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LandingPage from "../views/LandingPage";
import ContactUs from "../views/ContactUs";
import ExternalGallery from "../views/ExternalGallery";

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
        path: '/galeria',
        children: [
            {
                path: 'externa/:keyParam',
                element: <ExternalGallery/>
            },
            // {
            //     path: ':key',
            //     element: <StaticGallery/>
            // }
        ]
    },
]);

const Routes = () => <RouterProvider router={router}/>;

export default Routes;