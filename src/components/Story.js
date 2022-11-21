import React from 'react'

export default function Story() {
    return (
        <div>
            <div className='container'>
                <div className="mb-3 story">
                    <div className="row g-0">
                    <div className="col-md-6">
                            <div className="card-body">
                            <p className="card-text discover-para"><small className="text-muted">DISCOVER</small></p>
                                <h5 className="card-title story-heading">UPCOMMING EVENTS</h5>
                                <p className="card-text story-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <div className='d-flex point'>
                                    <div className='point-1'></div>
                                    <div className='point-2'></div>
                                    <div className='point-2'></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="./assets/images/story-image.png" className="img-fluid rounded-start story-image" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
