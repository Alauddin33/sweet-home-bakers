import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Review = () => {
    const { name, price, _id, } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const userReview = form.review.value;
        console.log(userReview);

        const review = {
            service: _id,
            serviceName: name,
            price,
            customer: user?.displayName,
            email: user?.email,
            userReview
        }



        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('review saved successfully')
                    form.reset();

                }
            })
            .catch(err => console.error(err));

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

                <div className=' text-center '>

                    {/* The button to open modal */}
                    <label htmlFor="my-modal-3" className="btn btn-success my-5">Add your review</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            {/* form */}
                            <form onSubmit={handleReview} className="form-control">
                                <textarea name='review' className="textarea textarea-bordered h-24" placeholder="Your review"></textarea>
                                <button className=' btn btn-primary w-1/5 mx-auto ' >ADD</button>
                            </form>

                        </div>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default Review;