import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const { name } = useLoaderData();

    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Details;