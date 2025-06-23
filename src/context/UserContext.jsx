import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/1`);
            setUser(response.data);
            console.log("User data fetched:", response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);