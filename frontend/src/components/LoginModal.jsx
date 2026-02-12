import Login from "../pages/Login";

export default function LoginModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadeIn">

      {/* POPUP CONTAINER */}
      <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-[380px] relative transform animate-scaleIn border border-white/30">

        {/* CLOSE BUTTON */}
        <button
          className="absolute top-3 right-4 text-gray-600 hover:text-black text-lg"
          onClick={onClose}
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-2xl font-serif text-center mb-2">Welcome Back</h2>
        <p className="text-center text-gray-600 text-sm mb-6">
          Log in to continue exploring beautiful interiors
        </p>

        {/* LOGIN FORM */}
        <Login isPopup={true} />

        {/* DIVIDER */}
        <div className="flex items-center my-5">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* SOCIAL BUTTONS (optional aesthetic only) */}
        <button className="w-full border border-gray-300 py-2 rounded-lg mb-3 hover:bg-gray-100 transition flex items-center justify-center gap-2">
          <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5" />
          Continue with Google
        </button>

        <button className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2">
          <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5" />
          Continue with Facebook
        </button>

        {/* FOOTER LINK */}
        <p className="text-center text-gray-600 text-sm mt-5">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
