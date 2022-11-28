import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UseAuthToken } from "../../Components/Button/Hooook/UseAuthToken";
// import { UseToken } from "../../ApiServices/auth";
// import { getUserToken } from '../../ApiServices/auth';
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, signInWithGoogle, setLoading } =
    useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const [userLoading, setUserLoading] = useState(false);
  const navigate = useNavigate();
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  //   const [token] = UseToken(createdUserEmail);
  const [token] = UseAuthToken(createdUserEmail);

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Created Successfully.");

        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.role);
            setUserLoading(true);
            toast.success("user Ccreated succesfully");
            navigate("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.code);
      })
      .finally(() => {
        setLoading(false);
        setUserLoading(false);
      });
  };
  const handleGoogle = () => {
    setUserLoading(true);
    signInWithGoogle().then((result) => {
      console.log(result.user);
      const user = result.user;
      saveUser(user?.displayName, user?.email, "buyer");
      toast.success("user Ccreated succesfully");
      navigate("/");
      // setToken(result.user);
      // setLoading(false);
      // navigate(from, { replace: true });
    });
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://serverside-sigma.vercel.app/users", {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreatedUserEmail(email);
        // getUserToken(email).then(() => {
        // 	navigate('/');
        // // });git
        // UseAuthToken(email).then(() => {
        //   toast.success("User Created Successfully.");
        //   navigate("/");
        // });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 border rounded">
        <h2 className="text-xl text-center border-b-2 font-bold p-3">SIGNUP</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
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
                  message: "Password must be 6 characters long",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="form-control select-bordered py-4 ">
            <select
              {...register("role", {
                required: "role is required",
              })}
            >
              <option value="">Select your Role...</option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
            {errors.role && (
              <p className="text-red-500">{errors.role.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent w-full mt-4"
            value="Sign Up"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p>
          Already have an account{" "}
          <Link className="text-primary" to="/login">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogle} className="btn btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
