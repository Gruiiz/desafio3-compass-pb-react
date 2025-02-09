import React, { useState } from "react";

const SignupPage: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { fullName: "", email: "", password: "", confirmPassword: "" };

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

    if (valid) {
      console.log("Form submitted successfully!");
      // Add form submission logic here
    }
  };

  return (
    <div className="min-h-screen flex pt-[100px]">
      <div className="bg-gray-100 flex items-center justify-center mx-auto">
        <img
          src="/src/assets/images/Home/s1.bg.image.png"
          alt="Signup Illustration"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="w-1/2 bg-gray-100 flex items-center justify-center p-8 mx-auto">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign Up</h2>
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
