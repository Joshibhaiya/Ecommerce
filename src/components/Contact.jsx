import React from 'react'

import '../App.css'

function Contact() {
    return (
        <>
            {/* Breadcrumb start  */}
            <div className="container-fluid">
                <div className="row bread">
                    <div className="col-md-12 inere-1">
                        <nav className=''>
                            <a href="" className='nac-a'>Home</a>
                            <span>/</span>
                            <span>Contact</span>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Breadcrumb end */}
            <div className="container-fluid">
                <div className="row">
                    <h1 className='h-center'>
                        <hr />
                        <span>CONTACT</span>
                        <hr />
                    </h1>
                    <div className="col-md-7 form-ppp">
                        <form className='con-form'>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Subject</label>
                                <input type="text" className="form-control" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-5 side-of">
                        <div className="col-md-6 side-off2">
                            <img src="/src/assets/depositphotos_41018917-stock-photo-businessman-push-to-contact-us.jpg" className='img-side-off' alt="" />
                        </div>
                        <div className="col-md-6">
                        <p className='mb-2'>
            <i className="fa-solid fa-location-dot footer-3"></i>
            123 Street, New York, USA
            </p>
            <p className='mb-2'>
            <i className="fa-regular fa-envelope footer-3"></i>
            info@example.com
            </p>
            <p className='mb-0'>
            <i className="fa-solid fa-phone footer-3"></i>
            +012 345 67890
            </p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Contact