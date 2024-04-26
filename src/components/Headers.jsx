import { NavLink } from "react-router-dom";


const Headers = () => {

    const navLinks = <>
        <NavLink to='/'
        className={({isActive}) => isActive ? "font-bold bg-orange-400 text-white px-2 py-1 rounded-md" : "font-bold" }
        >Home</NavLink>
        <NavLink to='/allTouristsSpot'
        className={({isActive}) => isActive ? "font-bold bg-orange-400 text-white px-2 py-1 rounded-md" : "font-bold" }
        >All Tourists Spot</NavLink>
        <NavLink to='/addTouristsSpot'
        className={({isActive}) => isActive ? "font-bold bg-orange-400 text-white px-2 py-1 rounded-md" : "font-bold" }
        >Add Tourists Spot</NavLink>
        <NavLink to='/myList'
        className={({isActive}) => isActive ? "font-bold bg-orange-400 text-white px-2 py-1 rounded-md" : "font-bold" }
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
                <a className="btn btn-sm bg-orange-400 text-white hover:bg-orange-600 duration-400">Login</a>
                <a className="btn btn-sm bg-orange-400 text-white hover:bg-orange-600 duration-400">Register</a>
            </div>
        </div>
    );
};

export default Headers;