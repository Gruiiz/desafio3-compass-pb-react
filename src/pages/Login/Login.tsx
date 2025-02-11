import React, { useState } from "react";
import { useSignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

interface FormErrors {
  email?: string;
  password?: string;
}

const LoginPage: React.FC = () => {
  const { isLoaded, signIn } = useSignIn();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid", { email, password });

      if (isLoaded) {
        try {
          // Fazendo login com Clerk
          await signIn.create({
            identifier: email,
            password,
          });

          console.log("Login bem-sucedido. Redirecionando para o checkout...");
          navigate("/home"); // Redireciona para a página de checkout

        } catch (err) {
          console.error("Erro ao fazer login:", err);
          setErrors({ ...errors, email: "Invalid email or password" });
        }
      }
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <div className="min-h-screen flex pt-[100px]">
      <div className="bg-gray-100 flex items-center justify-center mx-auto">
        <img
          src="/src/assets/images/Home/s1.bg.image.png"
          alt="Login Illustration"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="w-1/2 bg-gray-100 flex items-center justify-center p-8 mx-auto">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
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
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#B88E2F] text-white py-3 rounded-lg hover:bg-[#a17d2a] transition duration-200"
            >
              Sign In
            </button>
          </form>

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
              Sign in with Gmail
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-[#B88E2F] hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
