import React from "react";
import styles from "./products.module.css";
import {Link} from "react-router";
import {useGetAllProductsQuery} from "../../apis/prodctApi.jsx";

const Products = () => {
    const { isLoading, isError, data } = useGetAllProductsQuery();

    if (isLoading) return <p>Loading....</p>;

    if (isError) return <p>Something went wrong</p>;

    return (
        <ul className={styles.products}>
            {data?.map((product) => (
                <li key={product.id} className={styles.card}>

                    <Link to={`/products/${product.id}`} className={styles.link}>
                        <img
                            className={styles.img}
                            src={product.image}
                            alt={product.title}
                        />

                        <p className={styles.title}>{product.title}</p>

                        <p className={styles.price}>
                            ${product.price.toFixed(2)}
                        </p>

                        <p className={styles.desc}>{product.description}</p>
                    </Link>

                    <button className={styles.button}>Add to Cart</button>
                </li>
            ))}
        </ul>
    );
};

export default Products;