import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const AddReview = () => {
    const { user } = useContext(AuthContext);
    const { name, _id, price, picture } = useLoaderData();


    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log(form);
        const userReview = form.review.value;
        console.log(userReview);

        const review = {
            service: _id,
            serviceName: name,
            price,
            customer: user?.displayName,
            email: user?.email,
            userReview,
            image: user?.photoURL
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
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex justify-between mb-5'>
                    <h2 className="card-title text-orange-700">{name}</h2>
                    <h2 className="card-title text-orange-700">Price:  {price}</h2>
                </div>
                <form className=' text-center ' onSubmit={handleReview}>
                    <textarea name='review' className="textarea textarea-primary" placeholder="Your review here"></textarea> <br />
                    <button className="btn btn-primary">Add Review</button>
                </form>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default AddReview;