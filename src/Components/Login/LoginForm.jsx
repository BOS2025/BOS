import React, { useState, useEffect} from "react";
import "./LoginForm.css";
import image from "../Assets/image.png";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginForm = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(""); 
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
    }
  }, []);
  const handleRememberMe = (event) => {
    if (event.target.checked) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
  };

  const handleForgotPasswordSubmit = (event) => {
    event.preventDefault();
    alert(`A password reset link has been sent to ${resetEmail}.`);
    setShowForgotPassword(false);
  };
  


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

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); 

    
    const validCredential = allowedCredentials.find(
      (credential) => credential.email === email && credential.password === password
    );

    if (validCredential) {
      alert("Login Successful!");
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
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
            <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}
            /> {" "}Remember me
          </label>
          <a href="#forgot-password" 
          onClick={(e) => {
            e.preventDefault();  // Prevents default link behavior
            setShowForgotPassword(true); // Show the forgot password form
          }} >
            <pre>Forgot password?</pre>
          </a>
        </div>
        <input
          className="btn btn-outline-danger"
          type="submit"
          value="Login"
        />
      </form>

      {/* Forgot Password Form */}
      {showForgotPassword && (
        <div className="forgot-password-form">
          <h3>Reset Your Password</h3>
          <form onSubmit={handleForgotPasswordSubmit}>
            <input
              type="email"
              placeholder="Enter your registered email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              required
            />
            <button type="submit">Send Reset Link</button>
          </form>
          <button onClick={() => setShowForgotPassword(false)}>Cancel</button>
          </div>
      )}
    </div>
  );
};

export default LoginForm;
