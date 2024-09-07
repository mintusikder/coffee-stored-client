import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedData = useLoaderData()
    return (
        <div>
            <h2>Users: {loadedData.length}</h2>
        </div>
    );
};

export default Users;