import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Services = () => {
    useTitle('services')
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://sweet-home-bakers-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='container mx-auto p-4 my-6 space-y-2 text-center text-3xl text-amber-700 font-bold'>
                <p>Our Services</p>
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service.service_id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center my-6 '>
                <Link to='/full'><button className="btn btn-warning text-slate-800 px-7 bg-orange-500">See All</button></Link>
            </div>
        </div>
    );
};

export default Services;