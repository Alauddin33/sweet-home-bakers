import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaComment } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

const ServiceDetails = () => {

    const { name, picture, email, price, about, LaunchDate, like, comments } = useLoaderData();

    return (

        <div className=' w-4/5 mx-auto border-2 my-28 p-5 '>
            <div className="flex justify-between font-semibold space-x-4">

                <div className="flex flex-col space-y-1">
                    <p className="text-2xl text-amber-800 font-semibold">{name}</p>
                    <span className="text-xs text-yellow-700">Launch Date: {LaunchDate}</span>
                </div>
                <div>
                    <p className=' text-xl text-green-800 '> Price: {price} BDT</p>
                </div>
            </div>
            <div>
                <img src={picture} alt="" className="object-cover w-full my-6  sm:h-96" />

                <p className="text-lg text-teal-800 ">{about}</p>
            </div>
            <div className="flex flex-wrap justify-between ">
                <div className="flex space-x-2 text-sm dark:text-gray-400 my-4">
                    <button type="button" className=" text-blue-700 flex items-center p-1 space-x-1.5">
                        <FaComment></FaComment>
                        <span>{comments}</span>
                    </button>
                    <button type="button" className="flex items-center p-1 space-x-1.5 text-blue-700">
                        <AiFillLike></AiFillLike>
                        <span>{like}</span>
                    </button>
                </div>
                <div className='my-4 text-blue-700'>
                    <p>Email: {email}</p>
                </div>
            </div>
        </div>


    );
};

export default ServiceDetails;