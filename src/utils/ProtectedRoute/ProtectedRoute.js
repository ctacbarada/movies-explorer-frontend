import { Routes, Route, Navigate } from "react-router-dom";

export default function ProtectedRoute({ isUserLoggedIn, children, path }) {
  return (
    <Routes>
      <Route
        path={path}
        element={
          localStorage.getItem("jwt") ? children : <Navigate to="/signin" />
        }
      />
    </Routes>
  );
}
