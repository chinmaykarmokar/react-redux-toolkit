import { useSelector } from "react-redux";

const Profile = () => {
    const user = useSelector((state) => {return state.user.value});
    const polling = useSelector((state) => {return state.polling.value});

    return (
        <>
            <div>
                <h1>Profile Page</h1>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Email: {user.email}</p>
            </div>
            <br/>
            <div>
                <h2>Polling: {polling.interval}</h2>
            </div>
        </>
    )
}

export default Profile;