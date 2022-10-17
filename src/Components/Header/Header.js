import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/Logo.svg"
import { AuthContext } from '../../UserContexts/UserContext';
import "./Header.css"

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }
    return (
        <nav className='header'>
            <Link to='/'><img src={logo} alt="" /></Link>
            <div>
                {/* <Link to="/home">Home</Link> */}
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ? <button onClick={handleLogOut}>LogOut</button> :
                        <>
                            {/* <Link to="/signup">SignUp</Link> */}
                            <Link to='/login'>Login</Link>
                        </>
                }
            </div>

        </nav>
    );
};

export default Header;