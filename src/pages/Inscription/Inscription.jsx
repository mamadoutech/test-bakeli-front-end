import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Inscription.css";
import * as authService from "../../services/authService";
export default function Inscription(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error("No VITE_BACK_END_SERVER_URL in front-end .env");
      }
      setIsSubmitted(true);
      await authService.signup(formData);
      props.handleAuthEvt();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const { name, email, password, passwordConf } = formData;
  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf);
  };
  return (
    <>
      <main className="main-inscrip">
        <section className="inscrip">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h1>SIGN UP</h1>

            <label>
              <div>
                <input
                  type="text"
                  value={name}
                  name="name"
                  onChange={handleChange}
                  placeholder="Name"
                />
              </div>
            </label>
            <label>
              <div>
                <input
                  type="text"
                  value={email}
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
            </label>
            <label>
              <div>
                <input
                  type="password"
                  value={password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
            </label>
            <label>
              <div>
                <input
                  type="password"
                  value={passwordConf}
                  name="passwordConf"
                  onChange={handleChange}
                  placeholder="Confirm Password"
                />
              </div>
            </label>

            <div className="btns">
              <button className="btn" disabled={isFormInvalid() || isSubmitted}>
                {!isSubmitted ? "SIGN UP" : "🚀 Sending..."}
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
