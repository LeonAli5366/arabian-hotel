import React, { useContext } from 'react';
import './Header.css'
import img2 from '../../Assets/img2.png'
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../UserContext/UserContext';
const Header = () => {
    const { user, handleLogOut } = useContext(AuthContext);
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className='text-size'>
                    <Nav className="me-auto link-btn">
                        <Link to='/'>Home</Link>
                        <Link to='/booking'>Booking</Link>
                        <Link to='/bookinglist'>Booking List</Link>
                        {
                            user?.uid ? <Link onClick={handleLogOut}>LogOut</Link> :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/signup'>Sign Up</Link></>
                        }
                    </Nav>
                    {user?.uid ? <p>Email:{user.email}</p> : <p>please login</p>}
                </Container>
            </Navbar></>
    );
};

export default Header;