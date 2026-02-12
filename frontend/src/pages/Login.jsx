import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login({ isPopup = false }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      const user = res.data.user;

      // Save required details
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", user._id);
      localStorage.setItem("userRole", user.role);

      setMessage("Login Successful!");

      // ADMIN LOGIN REDIRECT
      if (user.role === "admin") {
        window.location.href = "/admin/dashboard";
        return;
      }

      // DESIGNER LOGIN REDIRECT
      if (user.role === "designer") {
        window.location.href = "/designer";
        return;
      }

      // CLIENT LOGIN REDIRECT
      window.location.href = "/";

    } catch (err) {
      setMessage(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <>
      {!isPopup && <Navbar />}

      <div
        className={
          isPopup
            ? "flex items-center justify-center"
            : "h-screen flex items-center justify-center bg-gray-100"
        }
      >
        <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow w-80">
          <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-3"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded mb-3"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            id="loginBtn"
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            Login
          </button>

          <p
            id="message"
            className="text-center mt-3 text-red-600"
          >
            {message}
          </p>
        </form>
      </div>

      {!isPopup && <Footer />}
    </>
  );
}
