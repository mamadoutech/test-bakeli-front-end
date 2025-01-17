import { Navigate } from "react-router-dom";

export default function ({ user, children }) {
  if (!user) return <Navigate to="/auth/connexion" />;
  return children;
}
