import './index.css'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


function Users() {
    const navigate = useNavigate();
    const [usersData, setUsersData] = useState([])
    const [loading, setLoading] = useState(false);

    const handleFetchUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const users = await response.json();
            console.log("User Data.....", users);
            setUsersData(users);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching users data:", error);
            toast.dark("Error Fetching User Data");
            setLoading(false);
        }
    };

    return (
        <>
            <div className="header">
                <h2 className='logo'>Task Manager</h2>
                <span className='fetch-btn' onClick={handleFetchUsers}>Fetch Users</span>
            </div>

            <div className='user-section'>
            {loading ? (
                <p className='loading'>Loading...</p>
            ) : (
                <ul>
                    {usersData.map((user) => (
                        <li
                            key={user.id}
                            className="user"
                        onClick={() => navigate(`/Tasks/${user.id}`)}
                        >
                            {user.name}
                        </li>
                    ))}
                </ul>
            )}
            </div>
            <ToastContainer />

        </>
    )
}

export default Users;