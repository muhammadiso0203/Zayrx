import { User2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

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
        <div className="text-center mt-4 flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold">Forgot Password</h3>
          <p className="text-gray-500 mt-1 w-80">
            Enter your email address and we'll send you password reset
            instructions.
          </p>
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
            className={`w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 outline-none ${emailError ? "bg-red-200 border-red-200" : ""}`}
          />
        </div>
        <button
          disabled={!email}
          onClick={() => navigate("/newPassword")}
          className={`w-full mt-6 py-3 rounded-xl font-semibold
    ${
      email
        ? "bg-yellow-500 text-white cursor-pointer"
        : "bg-yellow-200 cursor-not-allowed"
    }
  `}
        >
          Forgot Password
        </button>
        <div className="flex flex-col items-center justify-center mt-6 font-semibold">
          <p className="text-gray-400 text-[15px] w-50">
            Don't have access anymore?
          </p>
          <Link to={"/"} className="text-[15px] text-yellow-500">
            Try another method
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
