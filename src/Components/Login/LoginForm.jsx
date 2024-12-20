import React, { useState } from "react";
import "./LoginForm.css";
import image from "../Assets/image.png";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginForm = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 


  const allowedCredentials = [
    { email: "hodcomp@somaiya.edu", password: "hodcomp123!" },
    { email: "director.kjsse@somaiya.edu", password: "directorkjsse2024" },
    { email: "dean.engg@somaiya.edu", password: "deanengg2024" },
    { email: "hodextc@somaiya.edu", password: "hodextc2024" },
    { email: "hodetrx@somaiya.edu", password: "hodetrx2024" },
    { email: "hodit.engg@somaiya.edu", password: "hodit2024" },
    { email: "hodmech@somaiya.edu", password: "hodmech2024" },
    { email: "aaryaman.s@somaiya.edu", password: "aaryaman2024" },
    { email: "mansi.zala@somaiya.edu", password: "mansi2024" },
    { email: "deputydirector.kjsse@somaiya.edu", password: "deputydirector2024" },
    { email: "deanap@somaiya.edu", password: "deanap2024" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault(); 

    
    const validCredential = allowedCredentials.find(
      (credential) => credential.email === email && credential.password === password
    );

    if (validCredential) {
      alert("Login Successful!");
    } else {
      setError("Invalid email or password. Please check your credentials.");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <img src={image} alt="Responsive" className="responsive-image" />
        <h2>Board Of Studies</h2>
        <div className="input-box">
          <input
            type="email"
            className="form-control"
            placeholder="Enter Somaiya email ID"
            aria-label="Enter email ID"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(""); 
            }}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            aria-label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(""); 
            }}
            required
          />
          <RiLockPasswordFill className="icon" />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>} {}
        <div className="remember-forget">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#forgot-password">
            <pre>Forgot password?</pre>
          </a>
        </div>
        <input
          className="btn btn-outline-danger"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default LoginForm;
