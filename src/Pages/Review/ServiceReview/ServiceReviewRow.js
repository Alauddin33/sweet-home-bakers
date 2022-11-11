
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ServiceReviewRow = ({ review }) => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const { serviceName, customer, userReview, image, price } = review;

    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>

                    </div>
                </div>
            </td>
            <td className=' text-orange-800'>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">Price: {price} BDT</span>
            </td>
            <td>{userReview}</td>

        </tr>
    );
};

export default ServiceReviewRow;