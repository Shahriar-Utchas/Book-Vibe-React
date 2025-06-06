import React from 'react';

import {
    createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ListedBooks from '../Pages/ListedBooks/ListedBooks';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('booksData.json'),
                Component: Home,

            },
            {
                path: '/bookDetails/:id',
                loader: () => fetch('booksData.json'),
                Component: BookDetails,
            },
            {
                path: '/listedBooks',
                Component: ListedBooks,
            }

        ],
        // errorElement: <ErrorPage />,
    },
]);