import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import DashBoard from "./pages/DashBoard/DashBord";
import Inscription from "./pages/Inscription/Inscription";
import * as authService from "./services/authService";
import Connexion from "./pages/Connexion/Connexion";
import UnProtected from "./components/UnProtected/UnProtected";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Task from "./pages/Task/Task";

function App() {
  const [user, setUser] = useState(authService.getUser());

  const handleAuthEvt = () => {
    setUser(authService.getUser());
  };
  function handleLogOut() {
    authService.logout();
    setUser(null);
  }
  return (
    <>
      <div className="container">
        <NavBar user={user} />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute user={user}>
                <DashBoard handleLogOut={handleLogOut} user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/task"
            element={
              <ProtectedRoute user={user}>
                <Task />
              </ProtectedRoute>
            }
          />
          <Route
            path="/auth/inscription"
            element={<Inscription handleAuthEvt={handleAuthEvt} />}
          />
          <Route
            path="/auth/connexion"
            element={
              <UnProtected user={user}>
                <Connexion handleAuthEvt={handleAuthEvt} user={user} />
              </UnProtected>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
