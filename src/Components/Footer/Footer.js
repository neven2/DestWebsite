import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <>
        <section>
       <footer>
         <div class="footer-details container">
             <div class="footer-logo">
                 <h3>Dest</h3>
                 <p class="copyright-text">The best place you can buy products and sell products as well.</p>
             </div>
                  <div className="links">
                       <h3>Links</h3>
                     <ul>
                         <li><a href="#About">About</a></li>
                         <li><a href="#About">Services</a></li>
                         <li><a href="#About">Offers</a></li>
                         <li><a href="#About">Contact</a></li>
                     </ul>
                 </div>

            <div class="download-info">
                <h3>Contact info</h3>
                <p>info@dest.life</p>
                <p>+964 (0) 750 778 7768</p>
                <p>Iraq, Erbil ,New Azadi Village(ATCONZ)</p>
               
            </div>
              <div class="footer-follow">
                 <h3>Follow us</h3>
                 <div class="social-media-info"><i class="ri-facebook-fill"></i>Facebook</div>
                <div class="social-media-info"><i class="ri-twitter-line"></i>Instagram</div>
                <div class="social-media-info"><i class="ri-instagram-line"></i>Twitter</div>
             </div>
         </div>
     </footer>
         <p class="text-center copyright-text"><i class="ri-copyright-line"></i> 2022 copyright Dest All Right Reserved</p>
    </section>
</>
    )
}

export default Footer
