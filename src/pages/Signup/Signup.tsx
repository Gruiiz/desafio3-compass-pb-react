import React from "react";
import { useSignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

interface ClerkError {
  errors?: Array<{
    message?: string;
  }>;
}

const SignupPage: React.FC = () => {
  const { isLoaded, signUp } = useSignUp();
  const navigate = useNavigate();

  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [errors, setErrors] = React.useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [apiError, setApiError] = React.useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const validateFullName = (name: string): boolean => {
    return name.trim().length > 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { fullName: "", email: "", password: "", confirmPassword: "" };
    setApiError("");

    if (!validateFullName(fullName)) {
      valid = false;
      newErrors.fullName = "Full name is required.";
    }

    if (!validateEmail(email)) {
      valid = false;
      newErrors.email = "Please enter a valid email address.";
    }

    if (!validatePassword(password)) {
      valid = false;
      newErrors.password = "Password must be at least 6 characters long.";
    }

    if (password !== confirmPassword) {
      valid = false;
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (valid && isLoaded) {
      try {
        const [firstName, ...lastNameParts] = fullName.split(' ');
        const lastName = lastNameParts.join(' ') || "";

        await signUp.create({
          emailAddress: email,
          password,
          firstName,
          lastName,
        });

        navigate("/");

      } catch (error) {
        
        
        if (error instanceof Error) {
          setApiError(error.message);
        } else if (
          typeof error === "object" &&
          error !== null &&
          "errors" in error &&
          Array.isArray((error as ClerkError).errors)
        ) {
          const clerkError = error as ClerkError;
          setApiError(clerkError.errors?.[0]?.message || "");
        } else {
          setApiError("");
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex pt-[100px]">
      <div className="bg-gray-100 flex items-center justify-center mx-auto">
        <img
          src="https://bucket-furniro-pb.s3.us-east-2.amazonaws.com/images/Home/s1.bg.image.png"
          alt="Signup Illustration"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="w-1/2 bg-gray-100 flex items-center justify-center p-8 mx-auto">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign Up</h2>
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            {apiError && <p className="text-red-500 text-sm text-center mb-4">{apiError}</p>}

            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`w-full border ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="Create a password"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#B88E2F] text-white py-3 rounded-lg hover:bg-[#a17d2a] transition duration-200"
            >
              Sign Up
            </button>

            <div className="mt-6">
              <button
                type="button"
                className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-lg hover:bg-slate-300 transition duration-200"
              >
                <img
                  src="/src/assets/icons/Login&Signup/icon-google.svg"
                  alt="Google Icon"
                  className="w-5 h-5 mr-2"
                />
                Sign up with Gmail
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;