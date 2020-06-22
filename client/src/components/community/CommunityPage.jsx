import React from 'react'
import NavbarTwo from '../header/NavbarTwo'
import Footer from '../footer/Footer'
import './community.css'

const CommunityPage = () => {
    return (
        <div className="communityPage">
            <NavbarTwo />
            <img
            src="https://res.cloudinary.com/farmersmarket/image/upload/v1592579793/kids_pic_homepage_fydjeq.png" alt="community children"/>
            <div>
            <h1>Our Values</h1>
            <p>Almost half of the food grown by farmers in this country is never sold, but eating healthy keeps getting more expensive. This is a cycle of food waste that needs to end, and there’s a very simple solution to this very problem. Our mission is to eliminate food waste.</p>
            </div>
            <div>
                <h1>Become a Volunteer</h1>
                <p>If you want to help our Farmer Community and become a volunteer, being a driver, box packer or farmer assistant, let us know!</p>
            </div>
            <Footer />
        </div>
    )
}

export default CommunityPage