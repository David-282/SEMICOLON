import React from "react";
import {useParams} from "react-router";
import styles from "./products.module.css";
import {useGetAllProductsQuery} from "../../apis/prodctApi.jsx";

const ProductDetails = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetAllProductsQuery();

    if (isLoading) return <p>Loading...</p>;

    const product = data?.find((p) => p.id.toString() === id);

    if (!product) return <p>Product not found</p>;

    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.image} width="200" />
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    );
};

export default ProductDetails;