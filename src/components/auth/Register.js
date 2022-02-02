import axios from "axios";
import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import "../../App.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };

      // await axios.post("http://localhost:5000/auth/", registerData);
      await axios.post(
        "https://mern-auth-bk.herokuapp.com/auth/",
        registerData
      );
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="register">
      <h1>Register a new account</h1>
      <form onSubmit={register}>
        <div className="form">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form">
          <input
            type="password"
            placeholder="Verify your password"
            onChange={(e) => setPasswordVerify(e.target.value)}
            value={passwordVerify}
          />
        </div>
        <div className="form">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
