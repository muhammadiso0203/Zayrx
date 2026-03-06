import { User2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const ForgotPassword = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    if (!email) return t("authEmailRequired");
    if (!/^\S+@\S+\.\S+$/.test(email))
      return t("authEmailInvalid");
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
          <h3 className="text-2xl font-bold">{t("authForgotPasswordTitle")}</h3>
          <p className="text-gray-500 mt-1 w-80">
            {t("authForgotPasswordSub")}
          </p>
        </div>
        <div className="mt-4">
          <label className="text-sm font-medium text-gray-600">
            {t("authEmail")} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder={t("authEmailPlaceholder")}
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
          {t("authForgotPasswordBtn")}
        </button>
        <div className="flex flex-col items-center justify-center mt-6 font-semibold">
          <p className="text-gray-400 text-[15px] w-50">
            {t("authNoAccess")}
          </p>
          <Link to={"/"} className="text-[15px] text-yellow-500">
            {t("authTryAnotherMethod")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
