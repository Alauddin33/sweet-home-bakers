import React from 'react';
import img from '../../../assets/about.png'
import icon1 from '../../../assets/icons/icon1.png'
import icon2 from '../../../assets/icons/icon2.png'
import icon3 from '../../../assets/icons/icon3.png'

const About = () => {
    return (
        <>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={img} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                        <div className="space-y-2">
                            <p className="inline-block text-2xl font-semibold sm:text-3xl">A Message From The Founder:</p>
                        </div>
                        <div className="dark:text-gray-100">
                            <p className=' bg-amber-100 p-4'>I believe it is possible to have delicious gourmet confectionery at fantastic value prices that outshine the experience of buying sweets!</p>
                            <p className="text-xs font-bold dark:text-gray-400">BySweet home bakers</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                    <h2 className="text-5xl font-bold">Find something memorable.</h2>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 w-3/4">
                    <div className="flex flex-col items-center p-4">
                        <img src={icon1} alt="" />
                        <div className="my-3 text-xl font-semibold">
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
        </>
    );
};

export default About;