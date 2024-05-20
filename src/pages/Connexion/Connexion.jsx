import { useState } from "react";
import "./Connexion.css";
import * as authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function (props) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error("No VITE_BACK_END_SERVER_URL in front-end .env");
      }
      await authService.login(form);
      props.handleAuthEvt();
      navigate("/");
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  }
  const { email, password } = form;
  const isFormInvalid = () => {
    return !(email && password);
  };

  return (
    <main className="connexion-container">
      <section className="section">
        <div className="connexion-sub-container">
          <span>
            <img className="bakeli" src="/img/bakeli.png" />
          </span>
          <form className="form" autoComplete="off" onSubmit={handleSubmit}>
            <div>
              <h1 className="h1">Login</h1>
              <label>
                <input
                  type="text"
                  value={email}
                  name="email"
                  onChange={handleChange}
                  placeholder="Email Address"
                />
              </label>
              <label>
                <input
                  type="password"
                  value={password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
              </label>
              <div className="btns">
                <button
                  className="btn"
                  disabled={isFormInvalid() || isSubmitted}
                >
                  {!isSubmitted ? "Connexion" : "🚀 Sending..."}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
