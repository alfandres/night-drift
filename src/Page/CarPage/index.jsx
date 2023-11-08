import React from 'react';
import { Link } from 'react-router-dom';

import { cardata } from '../../Components/CarData';

function CarPage(){

    return(
        <>
            <h1 className='grid place-items-center  text-red-500 text-lg font-bold'>CarPage</h1>
            <ul>
                {cardata.map(post => (
                    <CarLink post={post}/>
                ))}
            </ul>
        </>
    );
}

function CarLink({post}){
    return(
        <li>
            <Link to={`/car/${post.slug}`}>{post.title}</Link>
        </li>
    );
}


export { CarPage };