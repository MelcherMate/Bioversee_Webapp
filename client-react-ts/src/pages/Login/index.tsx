import Facebook from "../../img/facebook.png";
import Github from "../../img/github.png";
import Google from "../../img/google.png";
import "./Login.css";

const Login = () => {
  const google = () => {
    window.open("http://localhost:5173/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5173/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5173/auth/facebook", "_self");
  };

  return (
    <div id="loginPage">
      <div id="loginBox">
        <div id="leftBox">
          <div className="mainLoginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="mainLoginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="mainLoginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div id="rightBox">
          <input className="inputBox" type="text" placeholder="Username" />
          <input className="inputBox" type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
