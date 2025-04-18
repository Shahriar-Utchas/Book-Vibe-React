import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="bg-gray-200 p-6 md:p-10 my-4 rounded-2xl flex flex-col-reverse lg:flex-row items-center gap-8">
            {/* Text Content */}
            <div className="text-center lg:text-left flex-1">
                <p className="font-bold text-3xl md:text-4xl lg:text-5xl">
                    Books to freshen up your bookshelf
                </p>
                <Link to ='/ListedBooks'><button className="btn btn-accent mt-4">View The List</button></Link>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center">
                <img
                    src="/assets/books.jpg" // Remove `/public` from path
                    className="w-full max-w-md lg:max-w-full object-contain"
                    alt="banner"
                />
            </div>
        </div>
    );
};

export default Banner;
