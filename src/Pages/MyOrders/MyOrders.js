import React, { useEffect, useState } from 'react';
import MyOrder from './MyOrder/MyOrder';

const MyOrders = () => {
    const [myOrders,setMyOrders] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-springs-98541.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setMyOrders(data));
    },[])
    return (
        <div className="py-4">
            <h3>My Orders</h3>
            <section class="intro">
            <div class="bg-image h-100">
                <div class="mask d-flex align-items-center h-100">
                <div class="container">
                    <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="card shadow-2-strong">
                        <div class="card-body">
                            <div class="table-responsive">
                            <table class="table table-borderless mb-0">
                                <thead>
                                <tr>
                                    <th scope="col">
                                    
                                    </th>
                                    <th scope="col">Package Name</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">ADDRESS</th>
                                    <th scope="col">Close</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                myOrders.map(order => <MyOrder
                key={order._id}
                order={order}
                ></MyOrder>)
            }
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            
        </div>
    );
};

export default MyOrders;