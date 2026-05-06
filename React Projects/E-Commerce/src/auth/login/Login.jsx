import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Login.module.css";
import {useLoginMutation} from "../../apis/prodctApi.jsx";

const Login = () => {
    const userDetails = {
        username: "",
        password: ""
    };

    const [login, { data, isLoading }] = useLoginMutation();
    const [userProfile, setUserProfile] = useState(userDetails);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const changeHandler = (event) => {
        const { name, value } = event.target;

        setUserProfile((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { token } = await login(userProfile).unwrap();

            if (!token) {
                setError("Check your network");
                return;
            }

            navigate("/products");
        } catch (error) {
            console.log(error);
            setError("Login failed");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>Login</h2>

                <form className={styles.form} onSubmit={handleSubmit}>
                    {error && <p>{error}</p>}

                    <input
                        className={styles.input}
                        name="username"
                        onChange={changeHandler}
                        type="text"
                        placeholder="Username"
                    />

                    <input
                        className={styles.input}
                        name="password"
                        onChange={changeHandler}
                        type="password"
                        placeholder="Password"
                    />

                    <button
                        className={styles.button}
                        disabled={isLoading}
                        type="submit"
                    >
                        {isLoading ? "Loading..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;