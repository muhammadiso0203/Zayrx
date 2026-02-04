import { Eye, EyeOff, User2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [show, setShow] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email: string) => {
    if (!email) return "Email address is required";
    if (!/^\S+@\S+\.\S+$/.test(email))
      return "The email address you entered is wrong!";
    return "";
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-130 bg-white rounded-2xl p-10 shadow-xl">
        <div className="flex justify-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-100">
            <User2 className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="text-center mt-4">
          <h3 className="text-2xl font-bold">Create New Account</h3>
          <p className="text-gray-500 mt-1">Enter your details to sign up</p>
        </div>
        <div className="mt-6">
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-600">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 outline-none"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-600">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              onBlur={(e) => {
                const error = validateEmail(e.target.value);
                setEmailError(error);
              }}
              className={`w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 outline-none ${emailError ? "border-red-200 bg-red-200" : ""}`}
            />
            {emailError && (
              <div className="flex items-center gap-2 mt-1 text-sm text-red-500">
                <span className="w-4 h-4 flex items-center justify-center rounded-full border border-red-400 text-xs">
                  !
                </span>
                <span>{emailError}</span>
              </div>
            )}
          </div>
          <div className="relative mt-4">
            <label className="text-sm font-medium text-gray-600">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type={!show ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 outline-none"
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-4 top-10 text-gray-400"
            >
              {show ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <button
          className={`w-full rounded-xl py-3 mt-6 font-semibold text-[17px] ${fullName && email && password ? "bg-yellow-500 text-white cursor-pointer" : "bg-yellow-200 cursor-not-allowed"}`}
        >
          Register
        </button>
        <div className="flex items-center justify-center mt-6">
          <p className="text-gray-400 text-[15px] font-semibold gap-1">
            Already have an acoount?{" "}
            <Link to={"/"} className="text-yellow-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
