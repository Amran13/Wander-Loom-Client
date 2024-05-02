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
import Private from "./Protected/Private";
import CountryWise from "./CountryWise/CountryWise";
import Update from "./UpdateTouristSpot/Update";

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
                loader: ({ params }) => fetch(`https://tourism-management-server-three-eosin.vercel.app/tourist-spots/${params.id}`)
            },
            {
                path: '/countries-tour/:id',
                element: <CountryWise />,
                loader: ({ params }) => fetch(`https://tourism-management-server-three-eosin.vercel.app/countries-tour/${params.id}`)
            },
            {
                path: '/all-tourist-spot',
                element: <Private> <AllTouristSpot /></Private>,
                loader: () => fetch(`https://tourism-management-server-three-eosin.vercel.app/add-tourist-spot`)
            },
            {
                path: '/update/:id',
                element: <Private> <Update></Update> </Private>,
                loader: ({ params }) => fetch(`https://tourism-management-server-three-eosin.vercel.app/add-tourist-spot/${params.id}`)
            },
            {
                path: '/all-tourist-spot/:id',
                element: <Private> <AddedSpotsDetails /></Private>,
                loader: ({ params }) => fetch(`https://tourism-management-server-three-eosin.vercel.app/add-tourist-spot/${params.id}`)
            },
            {
                path: 'add-tourist-spot',
                element: <Private> <AddTouristSpot /> </Private>,
            },
            {
                path: '/my-list',
                element: <Private> <MyListPage></MyListPage> </Private>,
                loader: () => fetch('https://tourism-management-server-three-eosin.vercel.app/add-tourist-spot')
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