import React from 'react'
import '../App.css'

function Checkout() {
  return (
    <>
      {/* Breadcrumb start  */}
      <div className="container-fluid">
        <div className="row bread">
          <div className="col-md-12 inere-1">
            <nav className=''>
              <a href="" className='nac-a'>Home</a>
              <span>/</span>
              <a href="" className='nac-a'>Shop</a>
              <span>/</span>
              <span>Checkout</span>
            </nav>
          </div>
        </div>
      </div>
      {/* Breadcrumb end */}
      {/* adress section is start */}
      <div className="container-fluid main-con-address">
        <div className="row main-cat-p-address">
          <div className="col-md-8 part-1">
            <h1 className='h-center'>
              <hr />
              <span>BILLING ADDRESS</span>
              <hr />
            </h1>
            <div>
              <div className="row address-row">
                <div className="col-md-6 form-group form-addd">
                  <label htmlFor="">First Name</label>
                  <input type="text" className='form-control' placeholder='Name' />
                </div>
                <div className="col-md-6 form-group form-addd">
                  <label htmlFor="">Last Name</label>
                  <input type="text" className='form-control' placeholder='Last Name' />
                </div>
                <div className="col-md-6 form-group form-addd">
                  <label htmlFor="">E-mail</label>
                  <input type="email" className='form-control' placeholder='Email' />
                </div>
                <div className="col-md-6 form-group form-addd">
                  <label htmlFor="">Phone No.</label>
                  <input type="email" className='form-control' placeholder='Phone NO. +1230 12 12 12 ' />
                </div>
                <div className="col-md-6 form-group form-addd">
                  <label htmlFor="">Address Line 1</label>
                  <input type="text" className='form-control' placeholder='Address Line 1' />
                </div>
                <div className="col-md-6 form-group form-addd">
                  <label htmlFor="">Address Line 2</label>
                  <input type="text" className='form-control' placeholder='Address Line 2' />
                </div>
                <div className="col-md-6 form-group form-addd">
                  <label htmlFor="">Country</label>
                  <select name="" id="" className='custom-select'>
                    <option value="">india</option>
                    <option value="">USA</option>
                    <option value="">uk</option>
                  </select>
                </div>
                <div className="col-md-6 form-group form-addd">
                  <label htmlFor="">City</label>
                  <input type="text" className='form-control' placeholder='City' />
                </div>
                <div className="col-md-6 form-group form-addd">
                  <label htmlFor="">State</label>
                  <input type="text" className='form-control' placeholder='State' />
                </div>
                <div className="col-md-6 form-group form-addd">
                  <label htmlFor="">Zip code</label>
                  <input type="text" className='form-control' placeholder='Zip code' />
                </div>
                <div className="col-md-12 form-group ">
                  <div>
                    <label >
                      <input type="checkbox" id="createAccountCheckbox" name="createAccount" />
                      Create an Account
                    </label>
                  </div>

                </div>
                <div className="col-md-12 form-group ">
                  <div>
                    <label data-bs-toggle="collapse" data-bs-target="#shipping-address" aria-expanded="true" >
                      <input type="checkbox" id="createAccountCheckbox" name="createAccount" />
                      Shiping on another address
                    </label>
                  </div>

                </div>
              </div>
              <div className='collapse' id="shipping-address">
                <h1 className='h-center'>
                  <hr />
                  <span>SHIPPING ADDRESS</span>
                  <hr />
                </h1>
                <div className="row address-row">
                  <div className="col-md-6 form-group form-addd">
                    <label htmlFor="">First Name</label>
                    <input type="text" className='form-control' placeholder='Name' />
                  </div>
                  <div className="col-md-6 form-group form-addd">
                    <label htmlFor="">Last Name</label>
                    <input type="text" className='form-control' placeholder='Last Name' />
                  </div>
                  <div className="col-md-6 form-group form-addd">
                    <label htmlFor="">E-mail</label>
                    <input type="email" className='form-control' placeholder='Email' />
                  </div>
                  <div className="col-md-6 form-group form-addd">
                    <label htmlFor="">Phone No.</label>
                    <input type="email" className='form-control' placeholder='Phone NO. +1230 12 12 12 ' />
                  </div>
                  <div className="col-md-6 form-group form-addd">
                    <label htmlFor="">Address Line 1</label>
                    <input type="text" className='form-control' placeholder='Address Line 1' />
                  </div>
                  <div className="col-md-6 form-group form-addd">
                    <label htmlFor="">Address Line 2</label>
                    <input type="text" className='form-control' placeholder='Address Line 2' />
                  </div>
                  <div className="col-md-6 form-group form-addd">
                    <label htmlFor="">Country</label>
                    <select name="" id="" className='custom-select'>
                      <option value="">india</option>
                      <option value="">USA</option>
                      <option value="">uk</option>
                    </select>
                  </div>
                  <div className="col-md-6 form-group form-addd">
                    <label htmlFor="">City</label>
                    <input type="text" className='form-control' placeholder='City' />
                  </div>
                  <div className="col-md-6 form-group form-addd">
                    <label htmlFor="">State</label>
                    <input type="text" className='form-control' placeholder='State' />
                  </div>
                  <div className="col-md-6 form-group form-addd">
                    <label htmlFor="">Zip code</label>
                    <input type="text" className='form-control' placeholder='Zip code' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h1 className='h-center'>
              <hr />
              <span>Order Total</span>
              <hr />
            </h1>
            <div className='main-total-css'>
              <div className='border-bottom'>
                <h6>Products</h6>
                <div className='d-flex justify-content-between'>
                  <p>Product Name</p>
                  <p>$150</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p>Product Name</p>
                  <p>$150</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p>Product Name</p>
                  <p>$150</p>
                </div>
              </div>
              <div className='border-bottom pt-3 pb-2'>
                <div className='d-flex justify-content-between mb-3'>
                  <p>Product Name</p>
                  <p>$150</p>
                </div>
                <div className='d-flex justify-content-between mb-3'>
                  <p>Product Name</p>
                  <p>$150</p>
                </div>
              </div>

              <div className='pt-2'>
                <div className='d-flex justify-content-between'>
                  <p>Product Name</p>
                  <p>$150</p>
                </div>
              </div>
            </div>
            <div>
              <h1 className='h-center'>
                <hr />
                <span>Payment</span>
                <hr />
              </h1>
              <div className='payment-gatway-css'>
                <div className='form-group'>
                    <div className='custom-control custom-radio'>
                    <input type="radio" id="contactChoice1" name="contact" value="email" />
      <label >Paypal</label>
                    </div>
                </div>
                <div className='form-group'>
                <div className='custom-control custom-radio'>
                <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label >Direct Check</label>
                    </div>
                </div>
                <div className='form-group'>
                <div className='custom-control custom-radio'>
                <input type="radio" id="contactChoice3" name="contact" value="mail" />
      <label >Bank Transfer</label>
                    </div>
                </div>
                <a href="" type='btn' className='btn btn-outline-warning btkjk'>book order</a>
              </div>
              
            </div>

          </div>
        </div>
      </div>
      {/* address section is end */}
    </>
  )
}

export default Checkout