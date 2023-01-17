import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import single from '../../Assets/single.jpg'
import { FaBed, FaPeopleArrows } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Booking = () => {
    return (
        <div className='container d-flex justify-content-evenly'>
            <div>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={single} />
                    <Card.Body>
                        <Card.Title>Single Room</Card.Title>
                        <div className='d-flex justify-content-evenly'>
                            <div className='d-flex'>
                                <FaBed className='fs-3' />
                                <p className='fs-5 ms-2'>1</p>
                            </div>
                            <div className='d-flex'>
                                <FaPeopleArrows className='fs-3' />
                                <p className='fs-5 ms-2'>1</p>
                            </div>
                            <div>
                                <p className='fs-5'>price: 300$</p>
                            </div>
                        </div>
                        <Link to='/bookinglist' className='btn btn-primary'>Book Now</Link>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={single} />
                    <Card.Body>
                        <Card.Title>Double Bed</Card.Title>
                        <div className='d-flex justify-content-evenly'>
                            <div className='d-flex'>
                                <FaBed className='fs-3' />
                                <p className='fs-5 ms-2'>1</p>
                            </div>
                            <div className='d-flex'>
                                <FaPeopleArrows className='fs-3' />
                                <p className='fs-5 ms-2'>2</p>
                            </div>
                            <div>
                                <p className='fs-5'>price: 400$</p>
                            </div>
                        </div>
                        <Link to='/bookinglist' className='btn btn-primary'>Book Now</Link>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={single} />
                    <Card.Body>
                        <Card.Title>Family Bed</Card.Title>
                        <div className='d-flex justify-content-evenly'>
                            <div className='d-flex'>
                                <FaBed className='fs-3' />
                                <p className='fs-5 ms-2'>2</p>
                            </div>
                            <div className='d-flex'>
                                <FaPeopleArrows className='fs-3' />
                                <p className='fs-5 ms-2'>4</p>
                            </div>
                            <div>
                                <p className='fs-5'>price: 500$</p>
                            </div>
                        </div>
                        <Link to='/bookinglist' className='btn btn-primary'>Book Now</Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Booking;