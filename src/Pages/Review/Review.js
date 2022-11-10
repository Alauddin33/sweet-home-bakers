import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Review = () => {
    const { name, price, _id, } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReview = (event) => {
        const form = event.target;
        const userReview = form.review.value;

        const order = {
            service: _id,
            serviceName: name,
            price,
            customer: user.displayName,
            email: user?.email,
            userReview
        }

        fetch()

    }


    return (
        <div>
            <div className="overflow-x-auto w-full">
                <h1 className=' text-center text-xl text-white bg-emerald-500'>Customer Review for {name}</h1>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Reviewer name <br /> & Image</th>
                            <th>Review</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user?.displayName}</div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                <p>Desktop Support Technician</p>
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">x</button>
                            </th>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <label htmlFor="my-modal" className="btn">Add a Review</label>

                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <form onSubmit={handleReview} className="form-control">
                                <textarea name='review' className="textarea textarea-bordered h-24" placeholder="Your review"></textarea>
                                <div className="modal-action">
                                    <button>< label on htmlFor="my-modal" className="btn">ADD</label></button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Review;