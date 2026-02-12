import { Link } from "react-router-dom";

const userId = localStorage.getItem("userId");

export default function Navbar() {
  return (
    <header className="border-b bg-gradient-to-r from-accent to-[#B56A1F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-lg font-medium tracking-wide">UM Designs</h1>

        <nav className="hidden md:flex space-x-10 text-sm text-white">
          <Link to="/" className="hover:text-black">Home</Link>
          <Link to="/my-designs" className="hover:text-black">Designs</Link>
          <Link to="/Price" className="hover:text-black">Price</Link>
          <Link to="/Consultation" className="hover:text-black">Consultation</Link>
        </nav>

        <Link
          to="/consultation"
          className="text-sm border px-5 py-2 hover:bg-black hover:text-white transition"
        >
          Book Consultation
        </Link>
      </div>
    </header>
  );
}
