import './index.css'
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


function Users() {
    const navigate = useNavigate();
    const [usersData, setUsersData] = useState([])
    const [loading, setLoading] = useState(false);
    const [dataSaved, setDataSaved] = useState(false)


    const handleFetchUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const users = await response.json();
            console.log("User Data.....", users);
            localStorage.setItem('userList', JSON.stringify(users));
            toast.dark("Users Fetched Successfully", {
                autoClose: 1000,
            });
            setDataSaved(true)
            // const userFetchedData = await JSON.parse(localStorage.getItem('userList'))
            // // setUsersData(userFetchedData)
            // if (userFetchedData) {
            //     setUsersData(userFetchedData);
            //    }
            console.log(usersData, "usersData .....")
            setLoading(false);
        } catch (error) {
            console.error("Error fetching users data:", error);
            toast.dark("Error Fetching User Data", {
                autoClose: 2000,
            });
            setLoading(false);
        }
    };

    useEffect(() => {
        const userFetchedData = JSON.parse(localStorage.getItem('userList'))
        console.log(userFetchedData, "userFetchedData... useEffect")
        if (userFetchedData) {
            setUsersData(userFetchedData);
        }
    }, [dataSaved])

    return (
        <>
            <div className="header">
                <h2 className='logo'>Task Manager</h2>
                <button className='fetch-btn' onClick={handleFetchUsers}>Fetch Users</button>
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
                                onClick={() => navigate(`/Tasks/${user.name}/${user.id}`)}
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