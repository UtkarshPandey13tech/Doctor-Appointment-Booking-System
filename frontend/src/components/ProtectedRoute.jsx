import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

/**
 * ProtectedRoute — Redirects unauthenticated users to /login.
 * Usage: <ProtectedRoute><MyPage /></ProtectedRoute>
 */
const ProtectedRoute = ({ children }) => {
    const { token } = useContext(AppContext);

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
