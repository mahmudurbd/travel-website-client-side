import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Booking.css';
import useAuth from '../../hooks/useAuth';
const Booking = () => {
    const {bookingId} = useParams();
    const [totalData,setTotalData] = useState([]);
    //const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    /*  const onSubmit = data => {
        console.log(data)
    };
 */
    useEffect(()=> {
        fetch('https://shrouded-springs-98541.herokuapp.com/tourPackages')
        .then(res => res.json())
        .then(data => setTotalData(data))
    },[]);

    const bookingItem = totalData.find(item => item._id == bookingId)
    // console.log(bookingItem);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.order = bookingItem;
        // console.log(data)
        fetch('https://shrouded-springs-98541.herokuapp.com/orders',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Order processed successfully');
                reset();
            }
        })
    };
    return (
        <section className="intro">
            <div className="mask d-flex align-items-center h-100 gradient-custom">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-10">
                    <div className="card my-4">
                        <div className="card-body p-5">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6 col-xl-7">
                            <div className="text-center pt-md-5 pb-5 my-md-5">
                            <div class="container">
                            <section class="mx-auto my-5" >
                            <div class="card">
                            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <img src={bookingItem?.image} class="img-fluid" alt="" />
                                <a href="#!">
                                <div class="mask" ></div>
                                </a>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold"><a href="/">{bookingItem?.destination}</a></h5>
                                <ul class="list-unstyled list-inline mb-0">
                                <li class="list-inline-item ms-0">
                                    <i class="far fa-clock text-warning fa-md"></i> {bookingItem?.duration} Days
                                </li>
                                <li class="list-inline-item">
                                    <p class="text-muted">{bookingItem?.review} (reviews)</p>
                                </li>
                                </ul>
                                <h4 class="mb-2">$ {bookingItem?.price}</h4>
                                <p class="card-text">{bookingItem?.description}</p>
                            </div>
                            </div>
                            
                        </section>
                    </div>
                  </div>

                </div>
                <div className="col-md-6 col-xl-4 text-center">

                  <h2 className="fw-bold mb-4 pb-2">Checkout Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-outline mb-4">
                        <input defaultValue={user.displayName} {...register("name")} type="text" id="typeText" className="form-control form-control-lg" placeholder="Your Name" />
                    </div>
                    <div className="form-outline mb-3">
                        <input defaultValue={user.email} {...register("email", { required: true })} type="email" id="typeEmail" className="form-control form-control-lg" placeholder="Your Email" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-outline mb-4">
                        <input defaultValue="" {...register("address")} type="text" id="typeText" className="form-control form-control-lg" placeholder="Address" />
                    </div>
                    <div className="form-outline mb-4">
                        <input defaultValue="" {...register("phone")} type="text" id="typeText" className="form-control form-control-lg" placeholder="Phone Number" />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-info btn-block btn-lg" type="submit">Place Order</button>
                        
                    </div>
                    </form>
                    <br />
                        ------or------
                        <br />
                        <a href="/addpackage" className="btn btn-info btn-block btn-lg" type="submit">Add New Package</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default Booking;
/* 

   


    <div className="col-6 booking-item">
                <h3>Your Booking Item is {bookingId}</h3>
                <h2>{bookingItem?.destination}</h2>
                <img className="img-fluid" src={bookingItem?.image} alt="" />
            </div>
*/