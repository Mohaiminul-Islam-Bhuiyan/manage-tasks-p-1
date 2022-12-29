import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Login from '../LoginSignup/Login'
import SignUp from '../LoginSignup/SignUp'
import AddTask from './AddTask'
import CompletedTask from './CompletedTask'
import MyTask from './MyTask'
import ErrorPage from './Shared/ErrorPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <AddTask></AddTask>
            },
            {
                path: '/addtask',
                element: <AddTask></AddTask>
            },
            {
                path: '/mytask',
                element: <MyTask></MyTask>
            },
            {
                path: '/completedtask',
                element: <CompletedTask></CompletedTask>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;