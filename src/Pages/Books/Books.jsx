import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>

            <Suspense fallback={<div className='text-center text-2xl'>Loading...</div>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        data.map((book) => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>
            </Suspense>

        </div>
    );
};

export default Books;