import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className=''>
                    <img src="./assets/images/footer-logo.png" className="img mt-5 footer-logo" alt="..."/>
                    </div>
                </div>
                <div className='col-md-5'>
                    <p className='footer-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis. </p>
                </div>
                <div className='col-md-2'></div>
                <div className='col-md-5'>
                <h5 className='footer-heading pt-5'><i class="fa-solid fa-location-dot location"></i>Main Road, Building Name, Country</h5>
                    <h5 className='footer-heading'><i class="fa-solid fa-envelope location"></i>info@companyname.com</h5>
                </div>
                <div className='col-md-3'>
                    <p className='copyright'>© Company Name 2020. All rights reserved.</p>
                </div>
                <div className='col-md-7'></div>
                <div className='col-md-2'>
                    <div className='social'>
                    <div className='social-1'><i class="fa-brands fa-instagram icon"></i></div>
                    <div className='social-1'><i class="fa-brands fa-facebook-f icon"></i></div>
                    <div className='social-1'><i class="fa-brands fa-twitter icon"></i></div>
                    <div className='social-1'><i class="fa-brands fa-whatsapp icon"></i></div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
