import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [user, setUser] = useState(null);

  const fetchProfile = async () => {
    const token = localStorage.getItem("accessToken");

    // console.log("Home Token:", token); 

    if (!token) {
      console.log("No token found");
      return;
    }

    try {
      const response = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log("Profile:", response.data);
      setUser(response.data);
    } catch (error) {
      console.log("Profile Error:", error.response?.data);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <Navbar
        onLoginClick={() => setIsLoginOpen(true)}
        onSignupClick={() => setIsSignupOpen(true)}
      />

      <div className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h1 className="text-5xl font-bold">
          Welcome to My Website
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          React + FastAPI Authentication Project
        </p>

        {user && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">
              Welcome Back 👋
            </h2>

            <p className="text-gray-600 mt-2">
              Hello, {user.name}
            </p>
          </div>
        )}
      </div>

      <Modal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      >
        <h2 className="text-2xl font-bold mb-5">
          Login
        </h2>

       <LoginForm
  onSuccess={() => {
    setIsLoginOpen(false);
    fetchProfile();
  }}
  onCloseLogin={() => setIsLoginOpen(false)}
  onOpenSignup={() => setIsSignupOpen(true)}
/>
      </Modal>

      <Modal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
      >
        <h2 className="text-2xl font-bold mb-5">
          Signup
        </h2>

       <SignupForm
  onCloseSignup={() => setIsSignupOpen(false)}
  onOpenLogin={() => setIsLoginOpen(true)}
/>
      </Modal>
    </>
  );
}

export default Home;