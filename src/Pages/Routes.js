import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Login from '../LoginSignup/Login'
import SignUp from '../LoginSignup/SignUp'
import AddTask from './AddTask'
import CompletedTask from './CompletedTask'
import MyTask from './MyTask'
import PrivateRoute from './PrivateRoute'
import ErrorPage from './Shared/ErrorPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Login></Login>
            },
            {
                path: '/addtask',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: '/mytask',
                element: <PrivateRoute><MyTask></MyTask></PrivateRoute>
            },
            {
                path: '/completedtask',
                element: <PrivateRoute><CompletedTask></CompletedTask></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;