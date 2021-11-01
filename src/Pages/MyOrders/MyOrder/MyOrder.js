import React from 'react';

const MyOrder = (props) => {
    const {name,order,address} = props.order;
    console.log(order._id);
    const handleDelete = id => {
        const url = `https://shrouded-springs-98541.herokuapp.com/orders/${id}`;
        fetch(url,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <tr>
            <th scope="row">
            
            </th>
            <td>{order.destination}</td>
            <td>{name}</td>
            <td>${order.price}</td>
            <td>{address}</td>
            <td>
            <button onClick={handleDelete(order._id)} type="button" class="btn btn-danger btn-sm px-3">
                <i class="fas fa-times"></i>
            </button>
            </td>
        </tr>
    );
};

export default MyOrder;


