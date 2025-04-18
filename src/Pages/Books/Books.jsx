import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/booksData.json')
            .then(res => res.json())
            .then(json => {
                setData(json);
            })
    }, [data]);

    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {data.length === 0 ? (
                    <p className="text-center text-red-500 col-span-full">No books found!</p>
                ) : (
                    data.map((book) => <Book key={book.bookId} book={book} />)
                )}
            </div>
        </div>
    );
};

export default Books;
