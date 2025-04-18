import React, { Suspense } from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<div className='text-center text-2xl'>Loading...</div>}>
                <Books data={data}></Books>
            </Suspense>
        </div>
    );
};

export default Home;