import React from 'react'
import Top from './Top'

export default function Home() {
  return (
    <>
      <div className='home'>
        <Top />
        <div className='container-fluid'>
          <div className="">
            <div className="row">
              <div className="col-md-6">
                <div className="card-body">
                  <p className="card-text para">IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</p>
                  <h1 className="card-title home-heading">BURGER</h1>
                  <h5 className="card-title home-heading-2">WEEK</h5>
                </div>
              </div>
              <div className="col-md-6">
                <img src="./assets/images/home-image.png" className="img-fluid rounded-start" alt="..." />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
