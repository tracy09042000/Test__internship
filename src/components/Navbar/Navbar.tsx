import React from 'react'
import "./navbar.css"
function Navbar() {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="sidebar">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar