import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {

    // video 6 (when video finished)
    const [user] = useAuthState(auth);

    const handleSingOut = () => {
        signOut(auth)
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>

                {/* video 6 (when video finished) */}

                {
                    user ? <button onClick={handleSingOut}>Sign Out</button> : <Link to="/login">Login</Link>
                }


                {/* আমরা চাইলে লগ আউট বাটন দিয়েও করতে পারি আবার লিংক দিয়েও করতে পারি */}
                {/* {
                    user ? <Link to="/" onClick={handleSingOut}>Sign Out</Link> : <Link to="/login">Login</Link>
                } */}

                <Link to="/signup">Sign up</Link>
            </div>
        </nav>
    );
};

export default Header;