import { createBrowserRouter } from "react-router-dom";
import Booking from "../Booking/Booking";
import BookingList from "../BookingList/BookingList";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SignUp from "../Signup/SignUp";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/booking',
                element: <Booking></Booking>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/bookinglist',
                element: <PrivateRoute><BookingList></BookingList></PrivateRoute>
            }
        ]
    }
])