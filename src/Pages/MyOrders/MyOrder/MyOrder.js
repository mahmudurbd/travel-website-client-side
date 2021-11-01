import React from 'react';

const MyOrder = (props) => {
    const {name,order,address} = props.order;
    console.log(order._id);
    const handleDelete = id => {
        const url = `http://localhost:5000/orders/${id}`;
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
/* 

    <h3>{name}</h3>
            <p>{email}</p>
            <p>{order.destination}</p>
*/


/* 
     <tr>
                                    <th scope="row">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7" checked/>
                                    </div>
                                    </th>
                                    <td>Tatyana Fitzpatrick</td>
                                    <td>Regional Director</td>
                                    <td>19</td>
                                    <td>Warsaw</td>
                                    <td>
                                    <button type="button" class="btn btn-danger btn-sm px-3">
                                        <i class="fas fa-times"></i>
                                    </button>
                                    </td>
                                </tr>

*/

