import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../redux/actions/auth';
import Alert from './Alert'

const NavBar = ({ logout }) => {
    
    const logout_user = () => {
        logout();
    };

    const id = localStorage.getItem('id')

    const authLinks = (
        <Fragment>
            <Link className='navbar__top__auth__link' to='/'>{ id }</Link>
            <a className='navbar__top__auth__link' onClick={ logout_user } href='#!'>Logout</a>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <Link className='navbar__top__auth__link' to='/login'>Login</Link>
            <Link className='navbar__top__auth__link' to='/signup'>Sign Up</Link>
        </Fragment>
    );

    const isLogin = localStorage.getItem("access");

    return (
        <Fragment>
            <nav className='navbar'>
                <div className='navbar__top'>
                    <div className='navbar__top__logo'>
                        <Link className='navbar__top__logo__link' to='/'>Realest Estate</Link>
                    </div>
                    <div className='navbar__top__auth'>
                        { isLogin ? authLinks : guestLinks }
                    </div>
                </div>
                <div className='navbar__bottom'>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/'>Home</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/filter'>Filter</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/about'>About</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/contact'>Contact</NavLink>
                    </li>
                </div>
            </nav>
            <Alert />
        </Fragment>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(NavBar);
