import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ReviewRow from '../ReviewRow/ReviewRow';


const MyReview = () => {
    useTitle('MyReview');
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);



    useEffect(() => {
        fetch(`https://sweet-home-bakers-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.length === 0) {
                    alert('No reviews were added')
                }
                setReviews(data);
            })

    }, [user?.email])



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review?');
        if (proceed) {
            fetch(`https://sweet-home-bakers-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }





    return (
        <div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Your Name <br /> & picture </th>
                            <th>Service</th>
                            <th>Review</th>
                            <th>Edit Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            ></ReviewRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyReview;