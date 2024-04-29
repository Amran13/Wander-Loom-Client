import { createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import App from "../App";
import Home from "./Home/Home";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import TouristSpotsDetails from "./ViewDetails/TouristSpotsDetails";
import AddTouristSpot from "./AddTouristSpot/AddTouristSpot";
import MyListPage from "./MyList/MyListPage";
import AllTouristSpot from "./AllTouristSpot/AllTouristSpot";
import AddedSpotsDetails from "./ViewDetails/AddedSpotsDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/tourist-spots/:id',
                element: <TouristSpotsDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/tourist-spots/${params.id}`)
            },
            {
                path: '/all-tourist-spot',
                element: <AllTouristSpot />,
                loader: () => fetch(`http://localhost:5000/add-tourist-spot`)
            },
            {
                path: '/all-tourist-spot/:id',
                element: <AddedSpotsDetails />,
                loader: ({params}) => fetch(`http://localhost:5000/add-tourist-spot/${params.id}`)
            },
            {
                path: 'add-tourist-spot',
                element: <AddTouristSpot />,
            },
            {
                path : '/my-list',
                element : <MyListPage></MyListPage>,
                loader : () => fetch('http://localhost:5000/add-tourist-spot')
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },

        ]

    }
])


export default router;