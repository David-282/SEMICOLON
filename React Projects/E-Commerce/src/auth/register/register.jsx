import React from "react";
import { Link } from "react-router";
import styles from "./register.module.css";

const Register = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>Register</h2>

                <p className={styles.text}>
                    Have an account?{" "}
                    <Link className={styles.link} to="/login">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;