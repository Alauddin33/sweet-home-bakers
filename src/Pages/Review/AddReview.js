import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const AddReview = () => {
    const { user } = useContext(AuthContext);
    const { name, price, _id, } = useLoaderData();

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

            <form onSubmit={handleReview} className="form-control">
                <textarea name='review' className="textarea textarea-bordered h-24" placeholder="Your review"></textarea>
                <button className=' btn btn-primary w-1/5 mx-auto ' >ADD</button>
            </form>
        </div>
    );
};

export default AddReview;