import Facebook from "../../img/facebook.png";
import Github from "../../img/github.png";
import Google from "../../img/google.png";
import "./Login.css";

const Login = () => {
  const google = () => {
    window.open(`${process.env.VITE_SERVER_URL}/auth/google`, "_self");
  };

  const github = () => {
    window.open(`${process.env.VITE_SERVER_URL}/auth/github`, "_self");
  };

  // const facebook = () => {
  //   window.open(`${process.env.VITE_SERVER_URL}/auth/facebook`, "_self");
  // };

  return (
    <div id="loginPage">
      <div id="loginBox">
        <div className="loginButton google" onClick={google}>
          <img src={Google} alt="" className="icon" />
          Google
        </div>
        <div className="loginButton github" onClick={github}>
          <img src={Github} alt="" className="icon" />
          Github
        </div>
        <div
          className="loginButton facebook"
          // onClick={facebook}
        >
          <img src={Facebook} alt="" className="icon" />
          Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
