import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsGrid } from "../Home/ProductsGrid";

export const HomePage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/cart-items')
            .then((res) => {
                setProducts(res.data);   // ✅ IMPORTANT
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ProductsGrid products={products} />
        </div>
    );
};