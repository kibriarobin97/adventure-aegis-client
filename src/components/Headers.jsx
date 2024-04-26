import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import defaultPhoto from "../assets/user.png"


const Headers = () => {

    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Successfully Logout", { position: "top-center" })
            })
            .catch(error => {
                toast.error(error.message, { position: "top-center" })
            })
    }

    const navLinks = <>
        <NavLink to='/'
            className={({ isActive }) => isActive ? "font-bold bg-orange-400 text-white px-2 py-1 rounded-md" : "font-bold"}
        >Home</NavLink>
        <NavLink to='/allTouristsSpot'
            className={({ isActive }) => isActive ? "font-bold bg-orange-400 text-white px-2 py-1 rounded-md" : "font-bold"}
        >All Tourists Spot</NavLink>
        <NavLink to='/addTouristsSpot'
            className={({ isActive }) => isActive ? "font-bold bg-orange-400 text-white px-2 py-1 rounded-md" : "font-bold"}
        >Add Tourists Spot</NavLink>
        <NavLink to='/myList'
            className={({ isActive }) => isActive ? "font-bold bg-orange-400 text-white px-2 py-1 rounded-md" : "font-bold"}
        >My List</NavLink>
    </>


    return (
        <div className="navbar bg-[#EBEEF3] mb-5 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold">Adventure-Aegis</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="User Photo" src={user?.photoURL || defaultPhoto} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-32 mx-auto">
                                <li className="hover:font-bold"><Link to='/userProfile'>
                                    {user?.displayName ? user.displayName : 'User'}
                                </Link></li>
                                <li className="hover:font-bold"><button onClick={handleLogOut}>Logout</button></li>
                            </ul>
                        </div>
                        :
                        <div>
                            <Link to='/login'>
                                <a className="btn btn-sm bg-orange-400 text-white hover:bg-orange-600 duration-500">Login</a>
                            </Link>
                            <Link to='/register'>
                                <a className="btn btn-sm bg-orange-400 text-white hover:bg-orange-600 duration-500">Register</a>
                            </Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Headers;