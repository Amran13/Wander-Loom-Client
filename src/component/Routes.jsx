import { createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import App from "../App";
import Home from "./Home/Home";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";

const router = createBrowserRouter([
    {
        path : '/', 
        element : <App/>,
        errorElement : <Error />,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/login',
                element : <Login/>
            },
            {
                path : '/register',
                element : <Register/>
            },
            
        ]

    }
])


export default router;