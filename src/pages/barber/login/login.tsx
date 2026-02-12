import { Eye, EyeOff, User2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { usePhone } from "../service/hooks/useUser";

const Login = () => {
  const [show, setShow] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const { mutate, isPending, error } = usePhone()

  const phoneRegex = /^\+998\d{9}$/;

  
  const handleLogin = () => {
    if(!phoneRegex.test(phoneNumber)){
      toast.error("Telefon raqam noto'g'ri")
      return
    }
    mutate(
      { phoneNumber, password },
      {
        onSuccess: (data: any) => {
          console.log("Login successful, data:", data.data.token);
          if (data.data.token) {
            Cookies.set("token", data.data.token);
          } else {
            console.error("Token not found in response data!");
          }
          toast.success("Login successful", { position: "top-right" });
          navigate("/layout");
        },
        onError: () => {
          toast.error("Login failed", { position: "top-right" });
        }
      }
    );
  }

  const handleStaticLogin = () => {
    // Setting a static token for demo/testing purposes
    Cookies.set("token", "static_demo_token");
    toast.success("Logged in with static account", { position: "top-right" });
    navigate("/layout");
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-130 bg-white rounded-2xl p-10 shadow-xl">
        <div className="flex justify-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-100">
            <User2 className="w-8 h-8 text-yellow-500" />
          </div>
        </div>

        <div className="text-center mt-4">
          <h3 className="text-2xl font-bold">Welcome Back</h3>
          <p className="text-gray-500 mt-1 text-sm">
            Glad to see you again. Log in to your account.
          </p>
        </div>

        <div className="mt-6">
          <label className="text-sm font-medium text-gray-600">
            Phone number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            className={`w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 outline-none`}
          />
          {error && (
            <div className="flex items-center gap-2 mt-1 text-sm text-red-500">
              <span className="w-4 h-4 flex items-center justify-center rounded-full border border-red-400 text-xs">
                !
              </span>
              <span>
                The phone number or password is incorrect
              </span>
            </div>
          )}
        </div>

        <div className="mt-4">
          <label className="text-sm font-medium text-gray-600">
            Password <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 pr-12 rounded-xl border border-gray-200 outline-none"
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {show ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 text-sm">
          <label className="flex items-center gap-2 text-gray-500">
            <input type="checkbox" className="rounded" />
            Keep me login
          </label>

          <Link to={"/forgotPassword"} className="text-yellow-500 font-medium">
            Forgot Password?
          </Link>
        </div>

        <button
          onClick={handleLogin}
          disabled={!phoneNumber || !password || isPending}
          className={`w-full mt-6 py-3 rounded-xl font-semibold
    ${phoneNumber && password
              ? "bg-yellow-500 text-white cursor-pointer"
              : "bg-yellow-200 cursor-not-allowed"
            }
  `}
        >
          {isPending ? "Logging in..." : "Login"}
        </button>

        <button
          onClick={handleStaticLogin}
          className="w-full mt-3 py-3 rounded-xl font-semibold border border-yellow-500 text-yellow-500 hover:bg-yellow-50 transition-colors"
        >
          Quick Login (Static)
        </button>

        <p className="text-center text-sm text-gray-500 mt-6 flex gap-1 justify-center items-center">
          Don’t have an account?
          <Link to={"/register"} className="text-yellow-500 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
