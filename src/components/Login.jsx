import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";
import { setPollingInterval, removePollingInterval } from "../features/polling";

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

    const setPollingHandler = () => {
        dispatch(setPollingInterval({
            interval: 2000
        }))
    }

    const removePollingHandler = () => {
        dispatch(removePollingInterval());
    }

    return (
        <>
            <button onClick = {submitProfileDetailsHandler}>
                Login
            </button>
            <button onClick = {logOutHandler}>
                Logout
            </button>
            <button onClick = {setPollingHandler}>
                Set Polling
            </button>
            <button onClick = {removePollingHandler}>
                Remove Polling
            </button>
        </>
    )
}

export default Login;