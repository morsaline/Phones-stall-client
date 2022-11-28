import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UseAuthToken } from "../../Components/Button/Hooook/UseAuthToken";
// import { UseToken } from "../../ApiServices/auth";
// import { getUserToken } from '../../ApiServices/auth';
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signin, signInWithGoogle, setLoading } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  //   const [token] = UseToken(loginUserEmail);
  const [userLoading, setUserLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [token] = UseAuthToken(loginUserEmail);

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // console.log(user);
        // getUserToken(data.email).then((data) => {
        setUserLoading(true);
        if (data) {
          navigate("/");
        }

        // });
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      })
      .finally(() => {
        setLoading(false);
        setUserLoading(false);
      });
  };

  // const handleGoogle = () => {
  //   signInWithGoogle().then((result) => {
  //     console.log(result.user);
  //     const user = result.user;
  //     toast.success("User Created Successfully.");
  //     // saveUser(user?.displayName, user?.email, "buyer");
  //     // setToken(result.user);
  //     // setLoading(false);
  //     // navigate(from, { replace: true });
  // //   });
  // };

  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div className="w-96 p-7 border rounded">
        <h2 className="text-xl text-center border-b-2 p-3 font-bold">LOGIN</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {" "}
              <span className="label-text">Forget Password?</span>
            </label>
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p>
          New to Phones Stall{" "}
          <Link className="text-primary" to="/signup">
            Create new Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
