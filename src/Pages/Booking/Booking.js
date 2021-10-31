import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Booking.css';
import useAuth from '../../hooks/useAuth';
const Booking = () => {
    const {bookingId} = useParams();
    const [totalData,setTotalData] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => console.log(data);

    useEffect(()=> {
        fetch('/travelo.json')
        .then(res => res.json())
        .then(data => setTotalData(data))
    },[]);

    const bookingItem = totalData.find(item => item.id == bookingId)
    // console.log(bookingItem);
    return (
        <section class="intro">
  <div class="mask d-flex align-items-center h-100 gradient-custom">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-xl-10">
          <div class="card">
            <div class="card-body p-5">

              <div class="row d-flex align-items-center">
                <div class="col-md-6 col-xl-7">

                  <div class="text-center pt-md-5 pb-5 my-md-5">
                  <img className="img-fluid" src={bookingItem?.image} alt="" />
                  </div>

                </div>
                <div class="col-md-6 col-xl-4 text-center">

                  <h2 class="fw-bold mb-4 pb-2">Checkout Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-outline mb-4">
                        <input defaultValue={user.displayName} {...register("name")} type="text" id="typeText" class="form-control form-control-lg" placeholder="Your Name" />
                    </div>
                    <div class="form-outline mb-3">
                        <input defaultValue={user.email} {...register("email", { required: true })} type="email" id="typeEmail" class="form-control form-control-lg" placeholder="Your Email" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div class="form-outline mb-4">
                        <input defaultValue="" {...register("address")} type="text" id="typeText" class="form-control form-control-lg" placeholder="Address" />
                    </div>
                    <div class="form-outline mb-4">
                        <input defaultValue="" {...register("phone")} type="text" id="typeText" class="form-control form-control-lg" placeholder="Phone Number" />
                    </div>
                    <div class="text-center">
                        <button class="btn btn-info btn-block btn-lg" type="submit">Place Order</button>
                    </div>
                    </form>
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