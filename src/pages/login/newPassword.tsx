import { Eye, EyeOff, User2 } from "lucide-react";
import { useState } from "react";

const NewPassword = () => {
    const [show, setShow] = useState(false)
    const [newShow, setNewShow] = useState(false)
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-130 bg-white rounded-2xl p-10 shadow-xl">
        <div className="flex justify-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-100">
            <User2 className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="text-center mt-4">
          <h3 className="text-2xl font-bold">Create New Password</h3>
          <p className="text-gray-500 mt-1 text-[15px]">Please enter a new password. Your new password must be different from previous password</p>
        </div>
        <div className="relative mt-4">
            <label className="text-sm font-medium text-gray-600">
              New Password
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
          <div className="relative mt-4">
            <label className="text-sm font-medium text-gray-600">
              Confirm New Password <span className="text-red-500">*</span>
            </label>
            <input
              type={!show ? "text" : "password"}
              placeholder="Enter your confirm password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 outline-none"
            />
            <button
              type="button"
              onClick={() => setNewShow(!newShow)}
              className="absolute right-4 top-10 text-gray-400"
            >
              {newShow ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
          className={`w-full mt-6 py-3 rounded-xl font-semibold
    ${
      password
        ? "bg-yellow-500 text-white cursor-pointer"
        : "bg-yellow-200 cursor-not-allowed"
    }
  `}
        >
          Reset password
        </button>
      </div>
    </div>
  );
};

export default NewPassword;
