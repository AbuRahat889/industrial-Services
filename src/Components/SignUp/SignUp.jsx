
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Contex/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const [showError, setShowError] = useState();
  const [success, setSuccess] = useState();
  const [showPass, setShowPass] = useState(true);

  const { createUser } = useContext(AuthContex);


  //sign up
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photourl.value;
    
    
    //check password lengtn
    if (password.length < 6) {
      setShowError("PassWord Should be at least 6 charecter!!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setShowError("PassWord must be one upercase!!");
      return;
    }

    //reset user
    setShowError(" ");
    setSuccess(" ");

    //user create
    createUser( email, password)
      .then((res) => {
        // const user = res.user;
        toast.success("Successfully create your account");
        // setSuccess("Successfully create your account");
      
      })
      .catch((error) => {
        const errorMessage = error.message;
        // setShowError(errorMessage);
        toast.error(errorMessage);
      });
  };

  return (
    <div>
      <Helmet>
        <title>UrbanNest | sign up</title>
      </Helmet>
      <ToastContainer />
      <div className=" text-center bg-[#3e00e75d]">
        <h1 className="text-4xl font-semibold p-5">Sign Up</h1>
      </div>
      <div className="hero bg-base-200 ">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100 my-10">
          <form className="card-body" onSubmit={handleSignUp}>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photourl"
                type="text"
                placeholder="URL"
                className="input input-bordered"
                required
              />
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <div className="input input-bordered flex items-center justify-between">
                <input
                  name="password"
                  type={showPass ? "password" : "text"}
                  placeholder="password"
                  required
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="cursor-pointer"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div>
              <input type="checkbox" name="terms" id="" required />
              <label htmlFor="terms" className="ml-2">
                accept our <a href="#">trems and condition</a>
              </label>
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign up"
              />
            </div>
            <p>
              If you have an account? Please{" "}
              <Link to="/signin" className="underline font-bold">
                Sign in
              </Link>
            </p>
          </form>
          {showError && <p className="text-red-600 pl-8 pb-5">{showError}</p>}
          {success && <p className="text-green-600 pl-8 pb-5">{success}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
