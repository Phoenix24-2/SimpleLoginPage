import "./App.css";

export default function App() {
  return (
    <>
      <div className="wrapper">
        <div className="title">Login</div>
        <div className="form">
          <div className="form-input">
            <label>Username :</label>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Username"
              required
            />
          </div>
          <div className="form-input">
            <label>Password : </label>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Password"
              required
            />
          </div>
          <button className="loginBtn">Log In</button>
          <span className="register-link">Not a member? <a href="">Register</a></span>
        </div>
      </div>
    </>
  );
}
