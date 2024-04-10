import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LandingPage from "../views/LandingPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage/>
    }
]);

const Routes = () => <RouterProvider router={router}/>;

export default Routes;