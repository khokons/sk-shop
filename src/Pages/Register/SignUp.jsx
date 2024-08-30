import { Link } from "react-router-dom";
import './signup.css';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/Providers/AuthProvider";


const SignUp = () => {
  const {createUser} = useContext(AuthContext);
  const [showPassword, setShowpassword] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password, name);
    setRegisterError("");
    setSuccess("");
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 charecter or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password should be at least one uppercase charecter ");
      return;
    } else if (!/[#?!@$%^&*-]/.test(password)) {
      setRegisterError("Password should be at least one special charecter");
    }

    createUser(email, password)
    .then((result)=>{
      console.log(result.user);
      setSuccess("User Register Successfully");
      e.target.reset();
    })
    .catch((error)=>{
      console.error(error);
      setRegisterError(error.message);
    })
  };


 

    return (
      <div>
      <h2 className="uppercase text-2xl text-center font-bold my-10 gradient-text tracking-wide">
        Please Register
      </h2>

      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto px-8 lg:p-16 rounded-[1rem] bg-[#1b1f23] shadow-[6px 6px 12px rgba(22,25,28,0.5), -6px -6px 12px rgba(32,37,42,0.5)]">
        <form onSubmit={handleSignup}>

        <div className="w-full mb-12">
            <label className="label">
              <span className="text-xl capitalize">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="w-full text-xl p-4 lg:p-8 mt-6 outline-none border-none rounded-[10px] inputShadho"
              required
            />
          </div>
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

          <div className="w-full mb-12 relative">
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

          <div className="mt-2">
          <button className="w-full gradient-text py-4 lg:py-8 px-6 lg:px-12 text-xl border-none rounded-[5px] inline-block cursor-pointer shadow-[6px_6px_12px_rgba(22,25,28,0.5),-6px_-6px_12px_rgba(32,37,42,0.5)]"
          >
      Rigster
          </button>

          </div>
        </form>
        
        <div>
          <p className="mt-2 text-center">
          Already have a account?
            <Link to='/login' className="gradient-text font-bold ml-3">Login</Link>
          </p>
        </div>

        {registerError && (
        <p className="text-center mt-2 text-red-700">{registerError}</p>
      )}

      {success && <p className="text-center mt-2 text-blue-800">{success}</p>}

      </div>
    </div>
    );
};

export default SignUp;