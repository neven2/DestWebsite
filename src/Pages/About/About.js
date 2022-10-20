import React from 'react'
import "./About.css"
import product from "../../assets/product.png";
import FourK from "../../assets/4k.png";
import Delivery from "../../assets/delivery.png";
import about from '../../assets/about.svg'
const About = () => {
    return (
        <>
        <section class="aboutUs" id="about">
            <div class="container about-items">
                <div class="about-img">
                    <img src={about} alt="Dest mobile app"/>
                </div>
                <div class="about-data">
                    <h2 className="about-us-header">Know more about us</h2>
                    <h3 class="about-title pink-text">DEST Website</h3>
                    <p class="about-text">We aim to make a platform to connect the customer with handmade creators and increase their sales across Iraq and
                    beyond. The platform will take care of all the marketing, delivery and customer services making more space for those
                    creators to create.
                    Our <strong>Vision</strong> is Drive a sustainable income for the vulnerable women and men behind the Iraqi handmades projects by sharing
                    their stories with the world.
                    </p>
                </div>
            </div>
    </section>
     <section class="services" id="services">
        <h2 class="section-title text-center">We Offer Best Services</h2>
        <div class="container">
            <div class="services-items">
                <div class="service">
                 <img src={Delivery} alt="" />
                    <h3>Best Delivery</h3>
                    <span class="service-link">
                   We Provide Fast and Best Delivery, so you can see your products faster.
                    </span>
                </div>
        
                <div class="service">
                    <img src={FourK} alt="" />
                    <h3>High Quality</h3>
                    <span class="service-link">
                       Our partners trying their best to come up with a product that satisfy the customers.
                    </span>
                </div>
                <div class="service">
                  <img src={product} alt="" />
                    <h3>User Sell Products</h3>
                    <span class="service-link">
                       we give our partners the opportunity to sell their products online!
                    </span>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}

export default About
