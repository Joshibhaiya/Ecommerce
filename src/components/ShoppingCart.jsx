import React from 'react'
import "../App.css"

function ShoppingCart() {
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
              <span>Shopping Cart</span>
            </nav>
          </div>
        </div>
      </div>
      {/* Breadcrumb end */}
      {/* cart is start  */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <table className='table table-light table-borderless tables-hover text-center mb-0'>
                      <thead>
                        <tr>
                          <th>Products</th>
                          <th>price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody className='align-middle'>
                        <tr>
                          <td className='align-middle'>
                            <img src="/src/assets/product-1.jpg" alt="" className='coiooo'/>
                          Product Name
                          </td>
                          <td className='align-middle'>150$</td>
                          <td className='align-middle'>
                            <div className='input-group quantity mx-auto SDFG'>
                              <div className="input-group-btn">
                                <button className='btn btn-sm btn-primary btn-minus'>
                                <i className="fa-regular fa-square-minus"></i>
                                </button>
                              </div>
                              <input type="text" className='form-control form-control-sm bg-secondary border-0 text-center' value={1} />
                              <div className="input-group-btn">
                                <button className='btn btn-sm btn-primary btn-plus'>
                                <i className="fa-solid fa-square-plus"></i>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className='align-middle'>150$</td>
                          <td className='align-middle'>
                            <button className='btn btn-sm btn-danger'>
                            <i className="fa-solid fa-square-xmark"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className='align-middle'>
                            <img src="/src/assets/product-1.jpg" alt="" className='coiooo'/>
                          Product Name
                          </td>
                          <td className='align-middle'>150$</td>
                          <td className='align-middle'>
                            <div className='input-group quantity mx-auto SDFG'>
                              <div className="input-group-btn">
                                <button className='btn btn-sm btn-primary btn-minus'>
                                <i className="fa-regular fa-square-minus"></i>
                                </button>
                              </div>
                              <input type="text" className='form-control form-control-sm bg-secondary border-0 text-center' value={1} />
                              <div className="input-group-btn">
                                <button className='btn btn-sm btn-primary btn-plus'>
                                <i className="fa-solid fa-square-plus"></i>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className='align-middle'>150$</td>
                          <td className='align-middle'>
                            <button className='btn btn-sm btn-danger'>
                            <i className="fa-solid fa-square-xmark"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className='align-middle'>
                            <img src="/src/assets/product-2.jpg" alt="" className='coiooo'/>
                          Product Name
                          </td>
                          <td className='align-middle'>150$</td>
                          <td className='align-middle'>
                            <div className='input-group quantity mx-auto SDFG'>
                              <div className="input-group-btn">
                                <button className='btn btn-sm btn-primary btn-minus'>
                                <i className="fa-regular fa-square-minus"></i>
                                </button>
                              </div>
                              <input type="text" className='form-control form-control-sm bg-secondary border-0 text-center' value={1} />
                              <div className="input-group-btn">
                                <button className='btn btn-sm btn-primary btn-plus'>
                                <i className="fa-solid fa-square-plus"></i>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className='align-middle'>150$</td>
                          <td className='align-middle'>
                            <button className='btn btn-sm btn-danger'>
                            <i className="fa-solid fa-square-xmark"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className='align-middle'>
                            <img src="/src/assets/product-3.jpg" alt="" className='coiooo'/>
                          Product Name
                          </td>
                          <td className='align-middle'>150$</td>
                          <td className='align-middle'>
                            <div className='input-group quantity mx-auto SDFG'>
                              <div className="input-group-btn">
                                <button className='btn btn-sm btn-primary btn-minus'>
                                <i className="fa-regular fa-square-minus"></i>
                                </button>
                              </div>
                              <input type="text" className='form-control form-control-sm bg-secondary border-0 text-center' value={1} />
                              <div className="input-group-btn">
                                <button className='btn btn-sm btn-primary btn-plus'>
                                <i className="fa-solid fa-square-plus"></i>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className='align-middle'>150$</td>
                          <td className='align-middle'>
                            <button className='btn btn-sm btn-danger'>
                            <i className="fa-solid fa-square-xmark"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className='align-middle'>
                            <img src="/src/assets/product-4.jpg" alt="" className='coiooo'/>
                          Product Name
                          </td>
                          <td className='align-middle'>150$</td>
                          <td className='align-middle'>
                            <div className='input-group quantity mx-auto SDFG'>
                              <div className="input-group-btn">
                                <button className='btn btn-sm btn-primary btn-minus'>
                                <i className="fa-regular fa-square-minus"></i>
                                </button>
                              </div>
                              <input type="text" className='form-control form-control-sm bg-secondary border-0 text-center' value={1} />
                              <div className="input-group-btn">
                                <button className='btn btn-sm btn-primary btn-plus'>
                                <i className="fa-solid fa-square-plus"></i>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className='align-middle'>150$</td>
                          <td className='align-middle'>
                            <button className='btn btn-sm btn-danger'>
                            <i className="fa-solid fa-square-xmark"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className='align-middle'>
                            <img src="/src/assets/product-5.jpg" alt="" className='coiooo'/>
                          Product Name
                          </td>
                          <td className='align-middle'>150$</td>
                          <td className='align-middle'>
                            <div className='input-group quantity mx-auto SDFG'>
                              <div className="input-group-btn">
                                <button className='btn btn-sm btn-primary btn-minus'>
                                <i className="fa-regular fa-square-minus"></i>
                                </button>
                              </div>
                              <input type="text" className='form-control form-control-sm bg-secondary border-0 text-center' value={1} />
                              <div className="input-group-btn">
                                <button className='btn btn-sm btn-primary btn-plus'>
                                <i className="fa-solid fa-square-plus"></i>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className='align-middle'>150$</td>
                          <td className='align-middle'>
                            <button className='btn btn-sm btn-danger'>
                            <i className="fa-solid fa-square-xmark"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
            </table>
          </div>
          <div className="col-md-4 mbmb">
            <form action="mb-30">
              <div className='input-group gpgp'>
                <input type="text" className='form-control border-0 ' placeholder='Coupon Code' />
                <div className='input-group-append'>
                  <button className='btn btn-outline-warning'>Apply Cupaon</button>
                </div>
              </div>
            </form>
            <h5 className='h-center'>
              <hr />
              <span>FILTER BY PRICE</span>
              <hr />
            </h5>
            <div>
              <div className='d-flex justify-content-between'>
                <h6>hi</h6>
                <h6>hi</h6>
              </div>
              <div className='d-flex justify-content-between'>
                <h6>hi</h6>
                <h6>hi</h6>
              </div>
            </div>
            <div className='text-align-center123'>
              <div className='d-flex justify-content-between'>
                <h5>total</h5>
                <h5>123</h5>
              </div>
              <button className='btn btn-outline-primary'>prceed to chekout</button>
            </div>
          </div>
        </div>
      </div>
      {/* cart is end */}
    </>
  )
}

export default ShoppingCart