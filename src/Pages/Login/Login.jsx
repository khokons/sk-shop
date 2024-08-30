import { useContext, useEffect, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2'
import { AuthContext } from "../../Components/Providers/AuthProvider";

const Login = () => {

const {signIn, googleLogin} = useContext(AuthContext);
const location = useLocation();
const navgate = useNavigate();
const [showPassword, setShowpassword] = useState(false);
const [loginError, setLoginError] = useState("");
const [success, setSuccess] = useState("");

  useEffect(()=>{
    loadCaptchaEnginge(4);
  },[])
// Google Login --------------------
  const handleGoogle =()=>{
    googleLogin()
    .then((result)=>{
      console.log(result.user);
      navgate(location?.state ? location.state : "/");
    })
    .catch((error)=>{
      console.error(error);
    })
  }


// Manualy Captcha & Login---------------------
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const captcha = e.target.captcha.value;
    console.log(email, password, captcha);
    setLoginError("");
    setSuccess("")

    signIn(email, password)
    .then((result) => {
      console.log(result.user);

      // এরপর ক্যাপচা যাচাই
      if (validateCaptcha(captcha)) {
        setSuccess("User Login Successfully");
        Swal.fire("User Login Successfully");
        e.target.reset();
        navgate(location?.state ? location.state : "/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Captcha validation failed!",
        });
      }
    })
    .catch((error) => {
      console.error(error);
      setLoginError("Please Check Email & Password");
      Swal.fire({
        icon: "error",
        text: "Please Check Email & Password!",
      });
    });
};


  return (
    <div>
      <h2 className="uppercase text-2xl text-center font-bold my-10 gradient-text tracking-wide">
        Please Login
      </h2>

      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-8 lg:p-16 rounded-[1rem] bg-[#1b1f23] shadow-[6px 6px 12px rgba(22,25,28,0.5), -6px -6px 12px rgba(32,37,42,0.5)]">
        <form onSubmit={handleLogin}>
          {/* Email Filed------------------ */}
          <div className="w-full mb-12">
            <label className="label">
              <span className="text-xl capitalize">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full text-xl p-4 lg:p-8 mt-6 outline-none border-none rounded-[10px] inputShadho"
              required
            />
          </div>
          {/* Password Filed------------------ */}
          <div className="w-full mb-2 relative">
            <label className="label">
              <span className="text-xl capitalize">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="w-full text-xl p-4 lg:p-8 mt-6 outline-none border-none rounded-[10px] inputShadho pr-12"
                required
              />
              <span
                className="absolute top-1/2 right-4 cursor-pointer"
                onClick={() => setShowpassword(!showPassword)}
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </span>
            </div>

            <label className="label mt-2">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
 {/* Captcha Filed------------------ */}
          <div className="w-full mb-12">
            <label className="label">
            <LoadCanvasTemplate />
            </label>
            <input
              type="text"
              placeholder="Type Captcha"
              name="captcha"
              className="w-full text-xl p-4 lg:p-8 mt-6 outline-none border-none rounded-[10px] inputShadho"
              
            />
          </div>
{/* Login Button---------------- */}
          <div className="mt-2">
            <button className="w-full gradient-text py-4 lg:py-8 px-6 lg:px-12 text-xl border-none rounded-[5px] inline-block cursor-pointer shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
              Login
            </button>
          </div>
        </form>
{/* Form------------------------------ */}
        <div>
          <p className="text-center mt-2">
            Are you new?
            <Link to="/signup" className="gradient-text font-bold ml-3">
              Register
            </Link>
          </p>

          <button onClick={handleGoogle} className="w-full mt-5 gradient-text py-4 lg:py-8 px-6 lg:px-12 text-xl border-none rounded-[5px] inline-block cursor-pointer shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]">
            Google
          </button>
        </div>
        {loginError && (
        <p className="text-center mt-2 text-red-700">{loginError}</p>
      )}

      {success && <p className="text-center mt-2 text-blue-800">{success}</p>}
      </div>
    </div>
  );
};

export default Login;
