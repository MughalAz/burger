import React from 'react'

export default function ContactUs() {
  return (
    <div className='contact'>
      <div className='container'>
        <h5 className='contact-heading'>RESERVATION</h5>
        <h1 className='contact-heading-2'>BOOK YOUR TABLE</h1>
        <form className='form'>
          <div class="row">
            <div class="col">
              <input type="text" class="form-control input-1" placeholder="NAME" />
              <input type="text" class="form-control input-1" placeholder="DATE" />
              <input type="text" class="form-control input-1" placeholder="PEOPLE" />
            </div>
            <div class="col">
              <input type="text" class="form-control input-1" placeholder="EMAIL" />
              <input type="text" class="form-control input-1" placeholder="TIME" />
              <button type="button" class="input-2">FIND A TABLE</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
