import { Navigate } from "react-router-dom";

export default function UnProtected({ user, children }) {
  if (user) return <Navigate to="/" />;
  return children;
}
