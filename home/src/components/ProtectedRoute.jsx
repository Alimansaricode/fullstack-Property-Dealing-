import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;

// function ProtectedRoute({ children, onLoginRequired }) {
//   const token = localStorage.getItem("accessToken");

//   if (!token) {
//     onLoginRequired(); // Login Popup खोलो
//     return null;
//   }

//   return children;
// }

// export default ProtectedRoute;