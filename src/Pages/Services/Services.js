import React from "react";
import "./services.css";
import product from "../../assets/product.png";
import FourK from "../../assets/4k.png";
import Delivery from "../../assets/delivery.png";

const Services = () => {
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
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
  );
};

export default Services;