import React from 'react'
import '../App.css'

function ShopDetails() {
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
                            <span>Shop Details</span>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Breadcrumb end */}
            {/* shop detail is start */}
            <div className="container-fluid add-1">
                {/* upper section start */}
                <div className="row">
                    <div className="col-md-5 add-2" >
                        <div id="carouselExampleDark" className="carousel carousel-dark slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src="/src/assets/product-1.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="/src/assets/product-2.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="/src/assets/product-3.jpg" className="d-block w-100" alt="..." />
                                </div>

                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-7 add-3">
                        <div>
                            <h3 className='add-4'>Product Name Goes Here</h3>
                            <div className='add-5'>
                                <div className='add-6'>
                                    <small className='fas fa-star'></small>
                                    <small className='fas fa-star'></small>
                                    <small className='fas fa-star'></small>
                                    <small className='fas fa-star'></small>
                                    <small className='fas fa-star'></small>
                                </div>
                                <small className='add-7'>(99 Rewies)</small>
                            </div>
                            <h3 className='add-8'>$150.00</h3>
                            <p className='add-9'>
                                Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                                clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                                Nonumy
                            </p>
                            <div className='add-10'>
                                <strong className='add-11'>Sizes:</strong>
                                <form action="" className='add-12'>
                                    <div className='add-13'>
                                        <input type="radio" id="huey" name="drone" value="huey" checked />
                                        <label>L</label>
                                    </div>

                                    <div className='add-13'>
                                        <input type="radio" id="dewey" name="drone" value="dewey" />
                                        <label>XX</label>
                                    </div>

                                    <div className='add-13'>
                                        <input type="radio" id="louie" name="drone" value="louie" />
                                        <label>XL</label>
                                    </div>
                                    <div className='add-13'>
                                        <input type="radio" id="louie" name="drone" value="louie" />
                                        <label>M</label>
                                    </div>
                                    <div className='add-13'>
                                        <input type="radio" id="louie" name="drone" value="louie" />
                                        <label>ML</label>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <strong className='add-11'>colour</strong>
                                <form action="" className='add-12'>
                                    <div className='add-13'>
                                        <input type="radio" id="huey" name="drone" value="huey" checked />
                                        <label>RED</label>
                                    </div>

                                    <div className='add-13'>
                                        <input type="radio" id="dewey" name="drone" value="dewey" />
                                        <label>BLACK</label>
                                    </div>

                                    <div className='add-13'>
                                        <input type="radio" id="louie" name="drone" value="louie" />
                                        <label>WHITE</label>
                                    </div >
                                    <div className='add-13'>
                                        <input type="radio" id="louie" name="drone" value="louie" />
                                        <label>GREEN</label>
                                    </div>
                                    <div className='add-13'>
                                        <input type="radio" id="louie" name="drone" value="louie" />
                                        <label>GREW</label>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <div className='add-30'>
                                    <td className='align-middle'>
                                        <div className='input-group quantity mx-auto SDFG2'>
                                            <div className="input-group-btn">
                                                <button className='btn btn-sm btn-primary btn-minus add-35'>
                                                    <i className="fa-regular fa-square-minus"></i>
                                                </button>
                                            </div>
                                            <input type="text" className='form-control form-control-sm bg-secondary border-0 text-center' value={1} />
                                            <div className="input-group-btn">
                                                <button className='btn btn-sm btn-primary btn-plus add-35'>
                                                    <i className="fa-solid fa-square-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </div>
                                <button className='add-24' >
                                    <i className="fa-solid fa-cart-flatbed"> Add to cart</i>
                                </button>
                            </div>
                            <div className='add-21'>
                                <strong>
                                    share on:
                                </strong>
                                <a href="" className='add-20'>
                                    <i className="fa-brands fa-square-facebook"></i>
                                </a>
                                <a href="" className='add-20'>
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="" className='add-20'>
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="" className='add-20'>
                                    <i className="fa-brands fa-square-pinterest"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                {/* upper section is end know */}
                {/* lower section is start  */}
                <div className="row">
                    <div className='rew-1'>
                        <nav className='rew-2'>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                            </div>
                        </nav>
                        <div className="tab-content rew-3" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                                <h4 className='mb-3'>Product Description</h4>
                                <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                                <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>

                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                                <h4 className='mb-3'>Product Description</h4>
                                <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                                <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                            </div>
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
                                <div className="container">
                                    <h2 className="mb-4">Leave a Review</h2>
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="name" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="email" required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="rating" className="form-label">Rating</label>
                                            <select className="form-select" id="rating" required>
                                                <option value="" selected disabled>Select a rating</option>
                                                <option value="5">5 Stars</option>
                                                <option value="4">4 Stars</option>
                                                <option value="3">3 Stars</option>
                                                <option value="2">2 Stars</option>
                                                <option value="1">1 Star</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="review" className="form-label">Review</label>
                                            <textarea className="form-control" id="review" rows="3" required></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit Review</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* lower section is end */}
            </div>
            {/* shop detail is end Know */}


            {/* <!-- Products Start --> */}
            <div className="container-fluid">
                <div className="row">
                <h1 className='h-center'>
          <hr />
          <span>RECENT PRODUCT</span>
          <hr />
        </h1>
                    <div className="col-md-3 product-des">
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
                    <div className="col-md-3 product-des">
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
                    <div className="col-md-3 product-des">
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
                    <div className="col-md-3 product-des">
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
                </div>
            </div>
            {/* <!-- Products End --> */}

        </>
    )
}

export default ShopDetails