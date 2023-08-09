import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
    const dispatch = useDispatch();

    const submitProfileDetailsHandler = () => {
        dispatch(login({
            name: "Chinmay",
            age: 21,
            email: "c@k.com"
        }))
    }

    const logOutHandler = () => {
        dispatch(logout());
    }

    return (
        <>
            <button onClick = {submitProfileDetailsHandler}>
                Login
            </button>
            <button onClick = {logOutHandler}>
                Logout
            </button>
        </>
    )
}

export default Login;