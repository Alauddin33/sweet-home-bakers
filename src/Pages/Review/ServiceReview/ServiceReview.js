import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import ServiceReviewRow from './ServiceReviewRow';


const ServiceReview = () => {

    const service = useLoaderData();
    const [reviews, setReviews] = useState([]);




    useEffect(() => {
        fetch(`https://sweet-home-bakers-server.vercel.app/reviews?service=${service?._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [service?._id])

    return (
        <div className=' text-center w-3/5 mx-auto'>
            <h2 className=' my-8 text-2xl text-orange-800 '>Customer Review</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Reviewer Name <br /> & image </th>
                            <th>Service</th>
                            <th>Review</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ServiceReviewRow
                                key={review._id}
                                review={review}
                            ></ServiceReviewRow>)
                        }
                    </tbody>

                </table>
            </div>

            <button className="btn btn-primary my-5"><Link to={`/addreview/${service?._id}`} className=' text-xl '> Add Your Review</Link ></button>


        </div>
    );
};

export default ServiceReview;