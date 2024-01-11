import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [customers, setCustomers] = useState([]);
    return (
        <ProductContext.Provider value={{ products, setProducts, customers, setCustomers }}>
            {children}
        </ProductContext.Provider>
    );
};