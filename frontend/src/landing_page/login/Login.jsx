import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 10) {
      setNumber(value);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/login", {
        number,
        password,
      });
      console.log(response.data);
      alert("User registered successfully!");
      setNumber("");
      setPassword("");
    } catch (err) {
      console.error(err);
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="container p-5 text-center">
      <h2 className="fs-2 mt-5">Open a free demat and trading account online</h2>
      <p className="text-muted">
        Start investing brokerage free and join a community of 1.5+ crore investors and traders
      </p>

      <div className="row d-flex justify-content-center align-items-center p-5">
        <div className="col-md-6">
          <img src="/media/images/signup.svg" alt="signup" className="img-fluid" />
        </div>

        <div className="col-md-5 text-start">
          <h2>Login now</h2>
          <p className="text-muted">Or track your existing application</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3" style={{ maxWidth: "350px" }}>
              <span className="input-group-text">+91</span>
              <input
                type="text"
                placeholder="Your 10 digit mobile number"
                value={number}
                onChange={handleNumberChange}
                className="form-control shadow-none p-3 fs-5"
                required
              />
            </div>

            {/* Password Input */}
            <div className="input-group mb-3" style={{ maxWidth: "350px" }}>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={handlePasswordChange}
                className="form-control shadow-none p-3 fs-5"
                required
              />
            </div>

            <button className="btn btn-primary w-50 p-2 fs-5">Log in</button>
          </form>

          {/* <p className="mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none" style={{ color: "rgb(56,126,209)" }}>
              Login here!
            </Link>
          </p> */}
          <p className="text-muted small mt-5">
            By proceeding, you agree to the Zerodha{" "}
            <a href="#" className="text-decoration-none">
              terms & privacy policy
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
