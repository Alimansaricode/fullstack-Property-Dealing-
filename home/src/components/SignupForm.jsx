import { useState } from "react";
import api from "../services/api";

function SignupForm({ onClose, openLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await api.post("/signup", {
        name,
        email,
        password,
      });

      alert("Signup Successful");

      setName("");
      setEmail("");
      setPassword("");

    } catch (error) {
      console.log(error.response?.data);
      alert("Signup Failed");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-3 mb-4 bg-white text-black placeholder-gray-400 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      <input
  type="email"
  placeholder="Enter Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full px-4 py-3 mb-4 bg-white text-black placeholder-gray-400 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
/>

<input
  type="password"
  placeholder="Enter Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full px-4 py-3 mb-4 bg-white text-black placeholder-gray-400 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
/>

      <button
        onClick={handleSignup}
        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
      >
        Signup
      </button>
      <p className="text-center mt-4">
  Already have an account?{" "}
  <button
  type="button"
  className="text-blue-600 hover:underline"
  
  onClick={() => {
    onClose();
    openLogin();
  }}
>
  Login
</button>
</p>
    </div>
  );
}

export default SignupForm;