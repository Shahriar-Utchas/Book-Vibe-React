// Read List Functions
// ----------------------------

// Get the stored "read list" from localStorage
const getStoredReadList = () => {
    const storedBookSTR = localStorage.getItem("readList");
    if (storedBookSTR) {
        return JSON.parse(storedBookSTR);
    } else {
        return [];
    }
};

// Add a book to the "read list"
const addToReadList = (id) => {
    const storedBookData = getStoredReadList();
    if (!storedBookData.includes(id)) {
        storedBookData.push(id);
        localStorage.setItem("readList", JSON.stringify(storedBookData));
    }
};

// Remove a book from the "read list"
const removeFromReadList = (id) => {
    const storedBookData = getStoredReadList();
    const updatedData = storedBookData.filter((bookId) => bookId !== id);
    localStorage.setItem("readList", JSON.stringify(updatedData));
};

// ----------------------------
// Wishlist Functions
// ----------------------------

// Get the stored "wishlist" from localStorage
const getStoredWishlist = () => {
    const storedWishlistSTR = localStorage.getItem("wishlist");
    if (storedWishlistSTR) {
        return JSON.parse(storedWishlistSTR);
    } else {
        return [];
    }
};

// Add a book to the "wishlist"
const addToWishlist = (id) => {
    const storedWishlist = getStoredWishlist();
    if (!storedWishlist.includes(id)) {
        storedWishlist.push(id);
        localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
    }
};

// Remove a book from the "wishlist"
const removeFromWishlist = (id) => {
    const storedWishlist = getStoredWishlist();
    const updatedWishlist = storedWishlist.filter((bookId) => bookId !== id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
};

// Export all functions for use in components
export {
    getStoredReadList,
    addToReadList,
    removeFromReadList,
    getStoredWishlist,
    addToWishlist,
    removeFromWishlist
};
