import React from 'react'
import "./brands.css"
import Promo from '../../assets/Promo.mp4'
const BrandPage = () => {
    return (
       <section class="promoVideo" id="promo">
            <div class="container promo-section">
                <div class="promo-video">
                <video controls width="400px" height="400px">    
                    <source src={Promo} type="video/mp4"/>
                    Sorry, your browser doesn't support embedded videos.
                </video>
                </div>
                <div class="promo-data">
                    <h3 class="section-subtitle">
                        High quality video
                    </h3>
                    <h2 class="section-title">
                        Watch a promo video
                    </h2>
                    <p>
                       we are connecting the customers with the handmade creators and increase their sales across Iraq, And we
                       give them the opportunity to glow and grow their Businesses.
                    </p>
                </div>
            </div>
    </section>
    )
}

export default BrandPage
