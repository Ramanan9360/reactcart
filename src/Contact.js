import React from 'react'

const Contact = () => {
    return (
        <div className='w-100'>
            <div className="contact w-25 m-auto">
                <div className="container py-3 mt-4" id="contact">
                    <div className="row ">
                        <div className="col-12">
                            <h2 className="text-center fw-bold">CONTACT</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 form m-3">
                            <form>
                                <div className="mb-3">
                                    <label for="" className="form-label float-start px-2">Name</label>
                                    <input type="Name" className="form-control" id="" />
                                </div>
                                <div className="mb-3">
                                    <label for="" className="form-label float-start px-2">Email</label>
                                    <input type="email" className="form-control" id="" />
                                </div>
                                <div class="mb-3">
                                    <label for="" className="form-label float-start px-2">Message</label>
                                    <textarea className="form-control" id="" placeholder="Required example textarea"
                                        required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact