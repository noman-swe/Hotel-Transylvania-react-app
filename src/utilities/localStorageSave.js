const addToDb = id => {
    let bookCart = getBookStoredCart();
    const quantity = bookCart[id];
    if (!quantity) {
        bookCart[id] = 1;
    }
    else {
        /* const newQuantity = quantity + 1;
        bookCart[id] = newQuantity; */
        alert('This Room is Booked.')
    }

    localStorage.setItem('transylvia', JSON.stringify(bookCart));
}

const getBookStoredCart = () => {
    let bookCart = {};
    const storedCart = localStorage.getItem('transylvia');
    if (storedCart) {
        bookCart = JSON.parse(storedCart);
    }
    return bookCart;

}

export {
    addToDb,
    getBookStoredCart
}