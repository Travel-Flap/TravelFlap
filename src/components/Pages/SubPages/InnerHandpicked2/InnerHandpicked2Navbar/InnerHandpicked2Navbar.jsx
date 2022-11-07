import React from 'react';
import "./InnerHandpicked2Navbar.css";

export const InnerHandpicked2Navbar = () => {
    return (
        <>

            <div className="card InnerHandpicked1NavbarMainPageContainer">
                <div className="card-header">
                    <ul className="nav nav-pills card-header-pills">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Things to do</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Best time to visit</a>
                        </li>
                        <div className="card-header InnerHandpicked1NavbarMainPageContainer2">
                            <ul className="nav nav-pills card-header-pills">
                                <li className="nav-item InnerHandpicked1NavbarlistItems">
                                    <a className="nav-link" href="#">Booking</a>
                                </li>
                                <li className="nav-item InnerHandpicked1NavbarlistItems">
                                    <a className="nav-link" href="#">Travel</a>
                                </li>
                                <li className="nav-item InnerHandpicked1NavbarlistItems">
                                    <a className="nav-link" href="#">Stay</a>
                                </li>
                                <li className="nav-item InnerHandpicked1NavbarlistItems">
                                    <a className="nav-link" href="#">Activities</a>
                                </li>
                                <li className="nav-item InnerHandpicked1NavbarlistItems">
                                    <a className="nav-link" href="#">Page</a>
                                </li>
                            </ul>
                        </div>
                    </ul>
                    </div>

                </div>
            </>
            )
}