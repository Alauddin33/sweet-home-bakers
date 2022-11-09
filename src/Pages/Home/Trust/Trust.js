import React from 'react';
import icon1 from '../../../assets/icons/icon1.png'
import icon2 from '../../../assets/icons/icon2.png'
import icon3 from '../../../assets/icons/icon3.png'

const Trust = () => {
    return (
        <section className="m-4 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto p-4 my-6 text-center">
                <h2 className="text-3xl text-amber-700 font-bold">Only your trust is our demand.</h2>
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 w-3/4 bg-lime-100 text-indigo-900">
                <div className="flex flex-col items-center p-4">
                    <img src={icon1} alt="" />
                    <div className="my-3 text-xl font-semibold ">
                        <h3 >Loved by our customer:</h3>
                        <h3>20000+ five star reviews</h3>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <img src={icon2} alt="" />
                    <div className="my-3 text-xl font-semibold">
                        <h3 >48 Hour Delivery</h3>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <img src={icon3} alt="" />
                    <div className="my-3 text-xl font-semibold">
                        <h3 >100% Satisfaction Guaranteed</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;