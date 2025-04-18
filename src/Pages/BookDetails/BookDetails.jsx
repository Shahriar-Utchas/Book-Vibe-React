import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const book = data.find((book) => book.bookId === bookId);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Book Image */}
            <div className="flex justify-center items-start">
                <img
                    src={book.image}
                    alt={book.bookName}
                    className="w-[300px] md:w-[350px] rounded-xl shadow-lg"
                />
            </div>

            {/* Right: Book Info */}
            <div className="space-y-4">
                <h2 className="text-3xl font-bold">{book.bookName}</h2>
                <p className="text-gray-600 font-medium">By : {book.author}</p>
                <p className="text-pink-500 font-semibold">{book.category}</p>

                <div>
                    <h3 className="font-semibold">Review :</h3>
                    <p className="text-gray-700 text-justify">{book.review}</p>
                </div>

                <div>
                    <h3 className="font-semibold">Tags</h3>
                    <div className="flex gap-2 mt-1 flex-wrap">
                        {book.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 text-gray-800">
                    <p><strong>Number of Pages:</strong> {book.totalPages}</p>
                    <p><strong>Publisher:</strong> {book.publisher}</p>
                    <p><strong>Year of Publishing:</strong> {book.yearOfPublishing}</p>
                    <p><strong>Rating:</strong> {book.rating}</p>
                </div>

                {/* Buttons */}
                <div className="pt-6 flex gap-4">
                    <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
                        Read
                    </button>
                    <button className="bg-sky-200 text-sky-800 px-6 py-2 rounded hover:bg-sky-300">
                        Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
