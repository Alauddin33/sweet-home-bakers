import React from 'react';
import img from '../../../assets/about.png'

const About = () => {
    return (

        <div className="p-5 mx-auto mt-24 dark:bg-gray-800 dark:text-gray-100">
            <h2 className="text-4xl text text-center text-amber-700 font-bold">Find something memorable.</h2>
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img src={img} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                    <div className="space-y-2 mt-5">
                        <p className="inline-block text-amber-700 text-2xl font-semibold sm:text-2xl">A Message From The Founder:</p>
                    </div>
                    <div className="dark:text-gray-100">
                        <p className='bg-lime-100 p-4 text-indigo-900'>I believe it is possible to have delicious gourmet confectionery at fantastic value prices that outshine the experience of buying sweets!</p>
                        <p className="text-xs text-yellow-900 font-bold dark:text-gray-400">BySweet home bakers</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;