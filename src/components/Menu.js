import React from 'react'

export default function Menu() {
    return (
        <div>
            <div className='container'>
                <div className='row mb-4'>
                    <div className='col-md-6'>
                        <div className="card bg-dark text-white menu-card">
                            <img src="./assets/images/menu-image-1.png" className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <p className="card-text">TRY IT TODAY</p>
                                <h5 className="card-title" style={{ fontSize: '30px', marginTop: '-20px' }}>MOST POPULAR BURGER</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="card bg-dark text-white menu-card">
                            <img src="./assets/images/menu-image-2.png" className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <p className="card-text">TRY IT TODAY</p>
                                <h5 className="card-title" style={{ fontSize: '30px', marginTop: '-20px' }}>MORE FUN<br /> MORE TASTE</h5>
                            </div>
                        </div>
                        <div className="card bg-dark text-white menu-card">
                            <img src="./assets/images/menu-image-3.png" className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <p className="card-text mt-2">TRY IT TODAY</p>
                                <h5 className="card-title" style={{ fontSize: '30px', marginTop: '-20px' }}>FRESH & CHILI</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='btn-1'>
                    <button type='button' className='btn'>ALWAYS TASTE BURGER</button>
                </div>
                <div className='heading-para'>
                    <h2 className='menu-heading'>CHOOSE & ENJOY</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                </div>
            </div>
            <div className='container'>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="h-100">
                            <img src="./assets/images/burger-image-1.png" class="card-img-top w-100 h-50" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Lorem ipsum dolor</h5>
                                <p class="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                <div className='btn2'>
                                    <button className='btn-2 mt-2'>ORDER NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="h-100">
                            <img src="./assets/images/burger-image-2.png" class="card-img-top w-100 h-50" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Lorem ipsum dolor</h5>
                                <p class="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                <div className='btn2'>
                                    <button className='btn-2 mt-2'>ORDER NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="h-100">
                            <img src="./assets/images/burger-image-1.png" class="card-img-top w-100 h-50" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Lorem ipsum dolor</h5>
                                <p class="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                <div className='btn2'>
                                    <button className='btn-2 mt-2'>ORDER NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
