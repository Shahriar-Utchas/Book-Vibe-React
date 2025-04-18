import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishlist } from '../../Utilities/utilities'; // Import utility functions

const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]); // State to store the read books
    const [wishlistBooks, setWishlistBooks] = useState([]); // State to store the wishlist books
    const [allBooks, setAllBooks] = useState([]); // State to store all books

    useEffect(() => {
        // Fetch the stored read list and wishlist from localStorage
        const readList = getStoredReadList();
        const wishlist = getStoredWishlist();

        // Fetch the books data from the public folder
        fetch('/booksData.json')
            .then(response => response.json())
            .then(data => {
                setAllBooks(data);

                // Filter books based on the read list and wishlist
                const readBooksList = data.filter((book) => readList.includes(book.bookId));
                const wishlistBooksList = data.filter((book) => wishlist.includes(book.bookId));

                // Update the state
                setReadBooks(readBooksList);
                setWishlistBooks(wishlistBooksList);
            })
            .catch(error => console.error('Error fetching books data:', error));
    }, []); // Empty dependency array ensures it runs once when the component mounts

    return (
        <div>
            <h1 className="text-3xl text-center font-bold my-5">Listed Books</h1>
            <Tabs className={"mx-auto my-5"}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2 className="font-semibold text-xl">Read Books</h2>
                    <ul>
                        {readBooks.length > 0 ? (
                            readBooks.map((book) => (
                                <li key={book.bookId} className="py-2">
                                    <img src={book.image} alt={book.bookName} className="w-20 h-30 object-cover" />
                                    <h3>{book.bookName}</h3>
                                    <p>{book.author}</p>
                                </li>
                            ))
                        ) : (
                            <p>No books marked as read.</p>
                        )}
                    </ul>
                </TabPanel>

                <TabPanel>
                    <h2 className="font-semibold text-xl">Wishlist Books</h2>
                    <ul>
                        {wishlistBooks.length > 0 ? (
                            wishlistBooks.map((book) => (
                                <li key={book.bookId} className="py-2">
                                    <img src={book.image} alt={book.bookName} className="w-20 h-30 object-cover" />
                                    <h3>{book.bookName}</h3>
                                    <p>{book.author}</p>
                                </li>
                            ))
                        ) : (
                            <p>No books in the wishlist.</p>
                        )}
                    </ul>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
