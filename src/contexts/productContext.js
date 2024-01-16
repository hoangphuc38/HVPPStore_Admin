import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productSizes, setProductSizes] = useState([]);
    const [customers, setCustomers] = useState([]);
    return (
        <ProductContext.Provider value={{ products, setProducts, customers, setCustomers, productSizes, setProductSizes }}>
            {children}
        </ProductContext.Provider>
    );
};