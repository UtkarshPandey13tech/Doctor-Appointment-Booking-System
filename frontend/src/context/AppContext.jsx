import { createContext, useCallback, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currencySymbol = '$';
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    // ─── Doctors ──────────────────────────────────────────────
    const [doctors, setDoctors] = useState([]);

    const getDoctorsData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/doctor/list');
            if (data.success) {
                setDoctors(data.doctors);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

    // ─── Auth ─────────────────────────────────────────────────
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [userData, setUserData] = useState(null);

    const login = useCallback((newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);
    }, []);

    const logout = useCallback(() => {
        setToken('');
        setUserData(null);
        localStorage.removeItem('token');
    }, []);

    const loadUserProfile = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/get-profile', {
                headers: { token }
            });
            if (data.success) {
                setUserData(data.userData);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    // ─── Dark Mode ────────────────────────────────────────────
    const [darkMode, setDarkMode] = useState(() => {
        const stored = localStorage.getItem('darkMode');
        return stored === 'true';
    });

    const toggleDarkMode = useCallback(() => {
        setDarkMode(prev => {
            const next = !prev;
            localStorage.setItem('darkMode', next);
            return next;
        });
    }, []);

    // Apply dark class to <html>
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    // ─── Effects ──────────────────────────────────────────────
    useEffect(() => {
        getDoctorsData();
    }, []);

    useEffect(() => {
        if (token) {
            loadUserProfile();
        }
    }, [token]);

    const value = {
        doctors,
        getDoctorsData,
        currencySymbol,
        backendUrl,
        // Auth
        token,
        userData,
        setUserData,
        login,
        logout,
        loadUserProfile,
        // Dark mode
        darkMode,
        toggleDarkMode,
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;