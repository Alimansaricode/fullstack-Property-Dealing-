import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

function LoginForm({ onSuccess, onClose, openSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);

  
  const navigate = useNavigate();

  const handleLogin = async () => {
  setLoading(true);

  try {
    const response = await api.post("/login", {
      email,
      password,
    });

    if (response.data.message !== "Login Successful") {
      toast.error(response.data.message);
      return;
    }

    localStorage.setItem("accessToken", response.data.access_token);
    localStorage.setItem("refreshToken", response.data.refresh_token);
    localStorage.setItem("userName", response.data.user.name);

    toast.success("Login Successful");

    if (onClose) onClose();
    if (onSuccess) onSuccess();

    navigate("/");

  } catch (error) {
    toast.error(error.response?.data?.detail || error.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <form className="space-y-5">

  <div>
    <label className="block text-gray-700 font-medium mb-2">
      Email
    </label>

    <input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full px-4 py-3 mb-4 bg-white text-black placeholder-gray-400 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>

  <div>
    <label className="block text-gray-700 font-medium mb-2">
      Password
    </label>

    <input
      type="password"
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full px-4 py-3 mb-4 bg-white text-black placeholder-gray-400 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>

 <button
  type="button"
  onClick={handleLogin}
  disabled={loading}
  className={`w-full py-3 rounded-lg font-semibold transition ${
    loading
      ? "bg-gray-500 text-white cursor-not-allowed"
      : "bg-blue-600 text-white hover:bg-blue-700"
  }`}
>
  {loading ? "Please Wait..." : "Login"}
</button>

  <p className="text-center text-gray-600">
    Don't have an account?{" "}
    <button
      type="button"
      className="text-blue-600 font-semibold hover:underline"
      onClick={() => {
        if (onClose) onClose();
        if (openSignup) openSignup();
      }}
    >
      Signup
    </button>
  </p>

</form>
  );
}

export default LoginForm;