import { useSelector } from "react-redux";
import { useGetUsersQuery, useGetSingleUserQuery } from "../features/userService";

const Profile = () => {
    const user = useSelector((state) => {return state.user.value});
    const polling = useSelector((state) => {return state.polling.value});

    const { data: allUsers } = useGetUsersQuery();
    const { data: singleUser } = useGetSingleUserQuery("3");
    console.log(allUsers);
    console.log(singleUser);

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