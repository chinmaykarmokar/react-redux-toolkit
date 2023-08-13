import { useSelector } from "react-redux";
import { 
    useGetUsersQuery,
    useGetSingleUserQuery,
    useAddUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation
} from "../features/userService";

const Profile = () => {
    // Fetch data from Redux Toolkit
    const user = useSelector((state) => {return state.user.value});
    const polling = useSelector((state) => {return state.polling.value});

    // Fetch data directly from state instead of using custom hooks
    const dataFromState = useSelector((state) => {return state?.mainApi?.queries['getUsers(undefined)']?.data});

    // Fetch data from custom hooks created from RTK Query
    const { data: allUsers } = useGetUsersQuery();
    const { data: singleUser } = useGetSingleUserQuery("3");
    const { singleUserData } = useGetUsersQuery(undefined, {
        selectFromResult: ({data}) => ({
            singleUserData: data
        })
    })

    const userPayload = {
        id: "11",
        name: "Chinmay Karmokar",
        phone: "1234567890",
        username: "chinmaykarmokar",
        website: "chinmay.com"
    }

    const [addUser] = useAddUserMutation();
    const [updateUser] = useUpdateUserMutation();

    const addUserHandler = async () => {
        await addUser(userPayload);
    }

    const updateUserHandler = async (id, name, username, email) => {
        const updateUserPayload = {
            id: id,
            name: `${name} Updated`,
            username: `${username} Updated`,
            email: `${email} Updated`
        }

        await updateUser(updateUserPayload);
    }

    console.log("FROM custom hook", allUsers);
    console.log("FROM custom hook", singleUser);
    console.log("FROM STATE", dataFromState);
    console.log(singleUserData);

    return (
        <>  
            <h1>Profile</h1>
            {
                allUsers?.map((singleUser) => {
                    return (
                        <div>
                            <p>ID: {singleUser.id}</p>
                            <p>Name: {singleUser.name}</p>
                            <p>Username: {singleUser.username}</p>
                            <p>Email: {singleUser.email}</p>
                            <button 
                            onClick = {
                                () => {
                                    updateUserHandler(singleUser.id, singleUser.name, singleUser.username, singleUser.email)
                                }}
                            >
                                Update User
                            </button>
                        </div>
                    )
                })
            }
            <br/>
            <div>
                <h2>Polling: {polling.interval}</h2>
            </div>
            <div>
                <button onClick = {addUserHandler}>
                    Add User
                </button>
            </div>
        </>
    )
}

export default Profile;