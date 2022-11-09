import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={service.picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-amber-800">{service.name}</h2>
                <p className=' text-orange-500 font-semibold'>Price: {service.price} BDT</p>
                <p> {service.about.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-lime-600 text-white ">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;