import Google from "../../img/google.png";
import Logo from "../../img/noBackgroundLogo.png";
import "./Login.css";

const Login = () => {
  const google = () => {
    window.open(`${process.env.VITE_SERVER_URL}/auth/google`, "_self");
  };

  return (
    <div id="loginPage">
      <div id="loginBox">
        <h2 id="loginTitle">Bioversee</h2>
        <img src={Logo} id="loginLogo"></img>
        <p id="slogan">
          Make industrial automation <br /> like a child's play
        </p>
        <div className="loginButton google" onClick={google}>
          <img src={Google} alt="Google icon" className="icon" />
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
