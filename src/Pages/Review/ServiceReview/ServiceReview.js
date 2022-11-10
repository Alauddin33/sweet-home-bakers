import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ServiceReview = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState({});
    // console.log(service._id);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service=${service._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [service._id])

    return (
        <div>
            <h2> you have {reviews.length}</h2>
        </div>
    );
};

export default ServiceReview;