import "./styles.css";
import mitLogo from "../../assets/mit.png";
import GoogleButton from "react-google-button";



function Login() {
  const handleLogin = async () =>{
        try{
            window.open('http://localhost:5000/auth/google',"_self")
        }catch(err){
          console.log(err);
        }
  } 
  return (
    <div className="sign-in-page">
      <div className="left-section">
        <h1>Welocme to IOTAAS</h1>
        <img src={mitLogo} alt="Your Platform Logo" />{" "}

      </div>
      <div className="right-section">
        <h3>Please Sign in with your College Email ID</h3>
        <GoogleButton className="google-sign-in-button"
          onClick={handleLogin}
        />
      </div>
    </div>
  );
}

export default Login;
