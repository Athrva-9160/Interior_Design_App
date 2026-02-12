import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Register({ isPopup = false }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role] = useState("client");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/register", {
        name,
        phone,
        email,
        password,
        role,
      });

      setMessage("Registration Successful!");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (err) {
      setMessage(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <>
      {/* Only show navbar in full page mode */}
      {!isPopup && <Navbar />}

      <div
        className={
          isPopup
            ? "flex items-center justify-center"
            : "h-screen flex items-center justify-center bg-gray-100"
        }
      >
        <form
          onSubmit={handleRegister}
          className="bg-white p-6 rounded-xl shadow w-80"
        >
          <h2 className="text-xl font-bold mb-3 text-center">Create Account</h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border rounded mb-3"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-2 border rounded mb-3"
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-3"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded mb-3"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-black text-white p-2 rounded hover:bg-gray-900 transition">
            Register
          </button>

          <p className="text-center mt-3 text-red-600">{message}</p>
        </form>
      </div>

      {/* Only show footer in full page mode */}
      {!isPopup && <Footer />}
    </>
  );
}
