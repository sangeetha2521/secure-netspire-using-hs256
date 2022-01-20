import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';
import {itemTotal}from'../post/CartHelper';
const isActive = (history, path) => {
    if (history.location.pathname === path) return { color: '#09BCF3' };
    else return { color: '#ffffff' };
};

const Menu = ({ history }) => (
    <div>
        
        <ul className="navbar sticky-top navbar-light bg-dark">
        {isAuthenticated() && (
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/')} to="/">
                ❃ Home 
                </Link>
            </li>
        )}
            {isAuthenticated() && (
            <li className="nav-item">
                <Link to={`/post/create`} style={isActive(history, `/post/create`)} className="nav-link">
                📱 Create Post
                </Link>
            </li>
            )}
             {isAuthenticated() && (
            <li className="nav-item">
                <Link
                    className="nav-link" style={isActive(history, '/users')}
                    to="/users"
                >
                   웃 Users
                </Link>
            </li>
             )}
              {isAuthenticated() && (
            <li className="nav-item">
                <Link
                   className="nav-link" style={isActive(history, '/products')}
                    to="/products"
                >
                  ⌚  Products
                </Link>
            </li>
              )}
 {isAuthenticated() && (
            <li className="nav-item">
                <Link
                    className="nav-link" style={isActive(history, '/shop')}
                    to="/shop"
                >
             🛒  Shop
                </Link>
            </li>
 )}

            {!isAuthenticated() && (
                <React.Fragment>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">
                        📲  Sign In
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">
                        📲   Sign Up
                        </Link>
                    </li>
                </React.Fragment>
            )}

{isAuthenticated() && (
                <React.Fragment>
                    <li className="nav-item">
                        <Link to={`/findpeople`} style={isActive(history, `/findpeople`)} className="nav-link">
                        👁  Find People
                        </Link>
                    </li>
                    
                    
            {isAuthenticated() && isAuthenticated().user.role === 'admin' && (
                <li className="nav-item">
                    <Link to={`/admin`} style={isActive(history, `/admin`)} className="nav-link">
                    👩‍💻 Admin
                    </Link>
                </li>
            )}
            <li className="nav-item">
                    <Link to={`/cart`} style={isActive(history, `/cart`)} className="nav-link">
                    Cart🛒{""}
                    <sup>
                        <small className="cart-badge">{itemTotal()}
                        </small>
                    </sup>
                    </Link>
                </li>
                


                <li className="nav-item">
                    <Link to={`/userDash`} style={isActive(history, `/userDash`)} className="nav-link">
                    웃 User Dashboard
                    </Link>
                </li>

                {isAuthenticated() && isAuthenticated().user.role === 'business' && (
                <li className="nav-item">
                    <Link to={`/dashboard`} style={isActive(history, `/dashboard`)} className="nav-link">
                    ＄웃 Business User Dashboard
                    </Link>
                </li>
            )}
            



                    <li className="nav-item">
                        <Link
                            to={`/user/${isAuthenticated().user._id}`}
                            style={isActive(history, `/user/${isAuthenticated().user._id}`)}
                            className="nav-link"
                        >
                            {`${isAuthenticated().user.name}'s profile ☃️`}
                        </Link>
                    </li>

                   
                    <li className="nav-item">
                        <span
                            className="nav-link"
                            style={{ cursor: 'pointer', color: '#fff' }}
                            onClick={() => signout(() => history.push('/'))}
                        >
                            Sign Out 📴
                        </span>
                    </li>
                </React.Fragment>
            )}
        </ul>
    </div>
);

export default withRouter(Menu);