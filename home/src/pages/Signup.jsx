import SignupForm from "../components/SignupForm";

function Signup({ onClose, openLogin }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-500 transition"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Join Dream Home to explore the best properties.
        </p>

        <SignupForm
          onClose={onClose}
          openLogin={openLogin}
        />

      </div>
    </div>
  );
}

export default Signup;