import React from 'react'
import { Link } from "react-router-dom";


export default function Top() {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src='./assets/images/logo.png' className="logo" alt='' />
                    </div>
                    <div className='col-md-3'></div>
                    <div className='col-md-5'>
                        <div className='delivery'>
                            <img src='./assets/images/logo-1.png' className="logo-1" alt='' />
                            <span className=''>Express Delivery +1 234 567 890</span>
                        </div>
                        <ul className="nav nav-pills nav-justified navbar">
                            <li className="nav-item">
                                <Link className="nav-link menu" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link menu" to="/menu">MENU</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link menu" to="/story">OUR STORY</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link menu" to="contact">CONTACT US</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
