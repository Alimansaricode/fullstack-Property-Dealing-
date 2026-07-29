import LoginForm from "../components/LoginForm";

function Login({ onClose, openSignup }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-4xl text-gray-400 hover:text-red-500 transition"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back
        </h2>

       

        {/* Login Form */}
        <LoginForm
          onClose={onClose}
          openSignup={openSignup}
        />

      </div>
    </div>
  );
}

export default Login;