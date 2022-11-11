import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const AddReview = () => {
    const { user } = useContext(AuthContext);
    const { name, _id, price, picture } = useLoaderData();


    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;

        const userReview = form.review.value;
        const userName = form.name.value;
        const userEmail = form.email.value;
        console.log(userName);

        const review = {
            service: _id,
            serviceName: name,
            price,
            customer: userName,
            email: userEmail,
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
                    <input className='input input-bordered my-2' type="text" name="name" placeholder='Your name' id="" />
                    <input className='input input-bordered my-2' type="email" name="email" defaultValue={user?.email} placeholder='Your email' id="" readOnly />
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