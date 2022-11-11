import Main from "../../Layout/Main";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AddReview from "../../Pages/Review/AddReview";
import MyReview from "../../Pages/Review/MyReview/MyReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import FullServices from "../../Pages/Home/Services/FullServices";
import Blog from "../../Pages/Blog/Blog";





const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/full',
                element: <FullServices></FullServices>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://sweet-home-bakers-server.vercel.app/services/${params.id}`),
            },
            {
                path: '/reviews',
                element: <PrivateRoute>
                    <MyReview></MyReview>
                </PrivateRoute>
            },
            {
                path: '/addreview/:id',
                element: <PrivateRoute>
                    <AddReview></AddReview>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://sweet-home-bakers-server.vercel.app/services/${params.id}`)
            }

        ]
    }
])

export default router