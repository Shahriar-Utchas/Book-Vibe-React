import React from 'react';
import { FaRegStar } from 'react-icons/fa'; // Make sure react-icons is installed

const Book = ({ book }) => {
    const { bookName, author, image, tags, rating, category } = book;

    return (
        <div className="card bg-base-200 shadow-md border p-4 rounded-xl space-y-3 m-5">
            {/* Book Image */}
            <figure className="bg-base-300 p-6 rounded-xl">
                <img src={image} alt={bookName} className="h-40 object-contain mx-auto" />
            </figure>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap">
                {tags?.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Book Details */}
            <div className="space-y-1">
                <h2 className="text-lg font-bold">{bookName}</h2>
                <p className="text-sm text-gray-600">
                    By : <span className="font-medium">{author}</span>
                </p>
            </div>

            {/* Footer: Category - Rating - Like */}
            <div className="flex justify-between items-center pt-2 border-t">
                <p className="text-sm">{category}</p>
                <div className="flex items-center gap-1">
                    <span>{rating?.toFixed(2)}</span>
                    <FaRegStar className="text-gray-500" />
                </div>
            </div>
        </div>
    );
};

export default Book;
