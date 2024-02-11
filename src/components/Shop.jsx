import React from 'react'
import '../App.css'

function Shop() {
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
              <span>Shop list</span>
            </nav>
          </div>
        </div>
      </div>
      {/* Breadcrumb end */}
      {/* shop section is start */}
      <div className="container-fluid hero-section-for-products">
        <div className="row">
          {/* shop side bar is start */}
          <div className="col-md-4">
            {/* price is start */}
            <h1 className='h-center'>
              <hr />
              <span>FILTER BY PRICE</span>
              <hr />
            </h1>
            <div className='main-section-of-filter'>
              <form action="">
                <div className='sub-section-of-filter'>
                  <input type="checkbox" className='sub-input' />
                  <label htmlFor="" className='lab-sub'>ALL PRICE</label>
                  <span className='span-filter'>1000</span>
                </div>
                <div className='sub-section-of-filter'>
                  <input type="checkbox" className='sub-input' />
                  <label htmlFor="" className='lab-sub'>$0-$100</label>
                  <span className='span-filter'>150</span>
                </div>
                <div className='sub-section-of-filter'>
                  <input type="checkbox" className='sub-input' />
                  <label htmlFor="" className='lab-sub'>$100-$200</label>
                  <span className='span-filter'>50</span>
                </div>
                <div className='sub-section-of-filter'>
                  <input type="checkbox" className='sub-input' />
                  <label htmlFor="" className='lab-sub'>$200-$300</label>
                  <span className='span-filter'>58</span>
                </div>
                <div className='sub-section-of-filter'>
                  <input type="checkbox" className='sub-input' />
                  <label htmlFor="" className='lab-sub'>$300-$400</label>
                  <span className='span-filter'>78</span>
                </div>
                <div className='sub-section-of-filter'>
                  <input type="checkbox" className='sub-input' />
                  <label htmlFor="" className='lab-sub'>$400-$500</label>
                  <span className='span-filter'>178</span>
                </div>
              </form>
            </div>
            {/* price end */}
            {/* color is start */}
            <h1 className='h-center'>
              <hr />
              <span>FILTER BY PRICE</span>
              <hr />
            </h1>
            <div className='main-section-of-filter'>
              <form action="">
                <div className='sub-section-of-filter'>
                  <input type="checkbox" className='sub-input' />
                  <label htmlFor="" className='lab-sub'>ALL color</label>
                  <span className='span-filter'>1000</span>
                </div>
                <div className='sub-section-of-filter'>
                  <input type="checkbox" className='sub-input' />
                  <label htmlFor="" className='lab-sub'>PINK</label>
                  <span className='span-filter'>150</span>
                </div>
                <div className='sub-section-of-filter'>
                  <input type="checkbox" className='sub-input' />
                  <label htmlFor="" className='lab-sub'>GREY</label>
                  <span className='span-filter'>500</span>
                </div>
                <div className='sub-section-of-filter'>
                  <input type="checkbox" className='sub-input' />
                  <label htmlFor="" className='lab-sub'>BLACK</label>
                  <span className='span-filter'>580</span>
                </div>
                <div className='sub-section-of-filter'>
                  <input type="checkbox" className='sub-input' />
                  <label htmlFor="" className='lab-sub'>BLUE</label>
                  <span className='span-filter'>780</span>
                </div>
                <div className='sub-section-of-filter'>
                  <input type="checkbox" className='sub-input' />
                  <label htmlFor="" className='lab-sub'>RED</label>
                  <span className='span-filter'>178</span>
                </div>
              </form>
            </div>
            {/* color is end */}
            {/* size is start */}
            <h1 className='h-center'>
              <hr />
              <span>FILTER BY SIZE</span>
              <hr />
            </h1>
            <div className='main-section-of-filter'>
              <form action="">
                <div className='sub-section-of-filter'>
                  <input type="checkbox" className='sub-input' />
                  <label htmlFor="" className='lab-sub'>ALL SIZES</label>
                  <span className='span-filter'>1000</span>
                </div>
                <div className='sub-section-of-filter'>
                  <input type="checkbox" className='sub-input' />
                  <label htmlFor="" className='lab-sub'>X</label>
                  <span className='span-filter'>150</span>
                </div>
                <div className='sub-section-of-filter'>
                  <input type="checkbox" className='sub-input' />
                  <label htmlFor="" className='lab-sub'>XX</label>
                  <span className='span-filter'>500</span>
                </div>
                <div className='sub-section-of-filter'>
                  <input type="checkbox" className='sub-input' />
                  <label htmlFor="" className='lab-sub'>L</label>
                  <span className='span-filter'>580</span>
                </div>
                <div className='sub-section-of-filter'>
                  <input type="checkbox" className='sub-input' />
                  <label htmlFor="" className='lab-sub'>M</label>
                  <span className='span-filter'>780</span>
                </div>
                <div className='sub-section-of-filter'>
                  <input type="checkbox" className='sub-input' />
                  <label htmlFor="" className='lab-sub'>LL</label>
                  <span className='span-filter'>178</span>
                </div>
              </form>
            </div>
            {/* size is end */}
          </div>
          {/* shop side bar is end */}
          {/* Divider of ection  */}
          {/* product is start */}
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12 section-for-products-header">
                <div className='d-flex align-items justify-content-between'>
                  <div>
                    <button className='button-shop-css'>
                      <i className="fa-brands fa-windows"></i>
                    </button>
                    <button className='button-shop-css'>
                      <i className="fa-solid fa-list"></i>
                    </button>
                  </div>
                  <div className='d-flex'>
                    <div className="dropdown pppp">
                      <button className="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Sorting
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Latest</a></li>
                        <li><a className="dropdown-item" href="#">Popularity</a></li>
                        <li><a className="dropdown-item" href="#">Best Rating</a></li>
                      </ul>
                    </div>
                    <div className="dropdown pppp">
                      <button className="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Showing
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">10</a></li>
                        <li><a className="dropdown-item" href="#">20</a></li>
                        <li><a className="dropdown-item" href="#">30</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* card section of procduct is staart */}
              <div className="col-md-4 product-des">
                <div className="col">
                  <div className="card h-100 card-bc">
                    <img src="/src/assets/product-1.jpg" className="card-img-top " alt="Product 1" />
                    <div className="card-body">
                      <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                      <p className="card-text">$19.99</p>
                      {/* <!-- Star Rating --> */}
                      <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 product-des">
                <div className="col">
                  <div className="card h-100 card-bc">
                    <img src="/src/assets/product-2.jpg" className="card-img-top " alt="Product 1" />
                    <div className="card-body">
                      <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                      <p className="card-text">$19.99</p>
                      {/* <!-- Star Rating --> */}
                      <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 product-des">
                <div className="col">
                  <div className="card h-100 card-bc">
                    <img src="/src/assets/product-3.jpg" className="card-img-top " alt="Product 1" />
                    <div className="card-body">
                      <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                      <p className="card-text">$19.99</p>
                      {/* <!-- Star Rating --> */}
                      <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 product-des">
                <div className="col">
                  <div className="card h-100 card-bc">
                    <img src="/src/assets/product-4.jpg" className="card-img-top " alt="Product 1" />
                    <div className="card-body">
                      <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                      <p className="card-text">$19.99</p>
                      {/* <!-- Star Rating --> */}
                      <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 product-des">
                <div className="col">
                  <div className="card h-100 card-bc">
                    <img src="/src/assets/product-5.jpg" className="card-img-top " alt="Product 1" />
                    <div className="card-body">
                      <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                      <p className="card-text">$19.99</p>
                      {/* <!-- Star Rating --> */}
                      <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 product-des">
                <div className="col">
                  <div className="card h-100 card-bc">
                    <img src="/src/assets/product-6.jpg" className="card-img-top " alt="Product 1" />
                    <div className="card-body">
                      <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                      <p className="card-text">$19.99</p>
                      {/* <!-- Star Rating --> */}
                      <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 product-des">
                <div className="col">
                  <div className="card h-100 card-bc">
                    <img src="/src/assets/product-7.jpg" className="card-img-top " alt="Product 1" />
                    <div className="card-body">
                      <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                      <p className="card-text">$19.99</p>
                      {/* <!-- Star Rating --> */}
                      <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 product-des">
                <div className="col">
                  <div className="card h-100 card-bc">
                    <img src="/src/assets/product-8.jpg" className="card-img-top " alt="Product 1" />
                    <div className="card-body">
                      <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                      <p className="card-text">$19.99</p>
                      {/* <!-- Star Rating --> */}
                      <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 product-des">
                <div className="col">
                  <div className="card h-100 card-bc">
                    <img src="/src/assets/product-2.jpg" className="card-img-top " alt="Product 1" />
                    <div className="card-body">
                      <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                      <p className="card-text">$19.99</p>
                      {/* <!-- Star Rating --> */}
                      <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              {/* card section of product is end */}
              <div className="col-md-12 mb-35">
              <div className="col-12">
                        <nav>
                          <ul className="pagination justify-content-center">
                            <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                          </ul>
                        </nav>
                    </div>
              </div>
            </div>
          </div>
          {/* product is end */}
        </div>
      </div>
      {/* shop section is end */}
    </>
  )
}

export default Shop