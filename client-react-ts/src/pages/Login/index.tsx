import Google from "../../img/google.png";
import "./Login.css";

const Login = () => {
  const google = () => {
    window.open("http://localhost:4321/auth/google", "_self");
  };

  return (
    <div id="loginPage">
      <div id="loginBox">
        <div className="mainLoginButton google" onClick={google}>
          <img src={Google} alt="" className="icon" />
          Google
        </div>
      </div>
    </div>
  );
};

export default Login;
