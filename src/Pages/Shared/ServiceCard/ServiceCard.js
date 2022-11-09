import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, name, price, about, picture } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-amber-800">{name}</h2>
                <p className=' text-orange-500 font-semibold'>Price: {price} BDT</p>
                <p> {about.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn btn-primary bg-purple-900 text-white ">View Details</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;