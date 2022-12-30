import React, { useContext } from 'react';
import { FaTasks } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(toast.warning('user logged out'))
            .catch(err => console.log(err))
    }


    const menuItems =
        <React.Fragment>
            <li><NavLink to='/addtask'>Add Task</NavLink></li>
            <li><NavLink to='/mytask'>My Tasks</NavLink></li>
            <li><NavLink to='/completedtask'>Completed Task</NavLink></li>
            {
                user?.uid ? (
                    <div>

                        <div className="dropdown dropdown-end">
                            <label tabIndex={3} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL ? user.photoURL : 'NoImg'} alt="" />
                                </div>
                            </label>
                            <ul tabIndex={4} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <button onClick={handleLogout}>Logout</button>
                            </ul>
                        </div>
                    </div>
                )
                    :
                    (
                        <>
                            <li><NavLink to='/login'>Login</NavLink></li>
                            <li><NavLink to='/signup'>Signup</NavLink></li>
                        </>
                    )
            }
        </React.Fragment>

    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={1} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><FaTasks></FaTasks>ManageTasks</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Header;