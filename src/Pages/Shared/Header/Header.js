import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then()
            .catch();

    }



    const navItems = <>
        <li className="link link-primary"> <Link to='/'>Home</Link> </li>
        <li className="link link-primary"> <Link to='/blog'>Blog</Link> </li>
        <li className="link link-primary"> <Link to='/reviews'>My Reviews</Link> </li>



    </>

    return (
        <div className="navbar bg-neutral h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className=" btn btn-ghost normal-case text-orange-600 text-xl "> <img className='mr-2' width="50" height="50" src={logo} alt="" /> Sweet Home Bakers</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
            {
                user?.email ?


                    <div className="navbar-end">
                        <button onClick={handleLogout} className="btn">Logout</button>
                    </div>

                    :


                    <div className="navbar-end">
                        <Link to='/login' className="btn">Log in</Link>
                    </div>

            }

        </div>
    );
};

export default Header;