import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LandingPage from "../views/LandingPage";
import ContactUs from "../views/ContactUs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage/>
    },
    {
        path: '/contacto',
        element: <ContactUs/>
    }
]);

const Routes = () => <RouterProvider router={router}/>;

export default Routes;