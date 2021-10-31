import axios from 'axios';
import React from 'react';
 import { useForm } from "react-hook-form";

const AddPackage = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/tourPackages',data)
        .then(res => {
            if(res.data.insertId) {
                alert('Package added successfully');
                reset();
            }
        })
    };
    return (
        <div className="py-4">
            <h3 className="my-3">Please Add package</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto p-5 shadow-lg">
                <div className="form-outline mb-4">
                    <input {...register("destination")} type="text" id="form4Example1" className="form-control"placeholder="Package Name" />
                </div>
                <div className="form-outline mb-4">
                    <input {...register("price")} type="number" id="form4Example2" className="form-control"placeholder="Price" />
                </div>
                <div className="form-outline mb-4">
                    <input {...register("image")} type="text" id="form4Example2" className="form-control"placeholder="Provide Image Url" />
                </div>
                <div className="form-outline mb-4">
                    <input {...register("duration")} type="number" id="form4Example2" className="form-control"placeholder="Duration" />
                </div>
                <div className="form-outline mb-4">
                    <textarea {...register("description")} className="form-control" id="form4Example3" rows="4">Description</textarea>
                </div>
                <button type="submit" className="btn btn-danger btn-block mb-4">Send</button>
            </form>
        </div>
    );
};

export default AddPackage;

