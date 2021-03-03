import React from 'react';

import { FaPhone,FaWarehouse} from "react-icons/fa";
import { GrMail} from "react-icons/gr";
import '../css/footer.css';

function Footer() {
    return (
        <>
        <div className='footer-top-section'>
            
            <div>
                <h5>About Us</h5>
                <h5>Our Discord Chat room</h5>
                <h5>Terms of Service, Warranty, Shipping & Returns</h5>
                <h5>Track Your Package</h5>

            </div>
            <div>
                <h4>Audiophile Store</h4>
                <h4>Digital Audio & Hi-Res Streaming Specialist</h4>
                <h4>Melbourne Stock, Australia Post Shipping</h4>
                <h4>Secure Payments with PayPal & Afterpay</h4>
                <h4>Experienced Hi-fi Technical Support - Live-Chat, Phone or Email</h4>

            </div>
            <div>

                <h4><FaPhone /> +61 434 516 440</h4>
                <h4><GrMail />Info@audiophile-store.com.au</h4>
                <h4> <FaWarehouse /> 2187 Princes Highway, Clayton VIC 3168.</h4>

                

            </div>
            </div>

            <div className="footer-bottom-section">
                <h4>Demonstration. By appointment only

EWIZARD COMMERCE AUSTRALIA PTY LTD</h4>
                <h4>ABN: 37 647 119 926</h4>
            </div>
        


        </>
        
    )
}

export default Footer
