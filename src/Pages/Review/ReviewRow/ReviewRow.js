import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const ReviewRow = ({ review, handleDelete }) => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://sweet-home-bakers-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })

    }, [user?.email])



    const { _id, serviceName, customer, userReview, image, price } = review;




    const handleUpdate = (event) => {

        event.preventDefault();
        const form = event.target;
        const changedValue = form.edit.value;
        // console.log(changedValue);

        let userReview = changedValue;
        console.log(userReview);

        fetch(`https://sweet-home-bakers-server.vercel.app/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ userReview })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(odr => odr._id !== _id);
                    setReviews(remaining);
                    window.location.reload();
                }

            })
    }



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
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
            <th >
                <form onSubmit={handleUpdate}>
                    <input type="text" name='edit' placeholder="type here" className="input input-bordered input-primary w-1/4 max-w-xs" />
                    <button className="btn btn-outline">Update</button>
                </form>
            </th>
        </tr>
    );
};

export default ReviewRow;