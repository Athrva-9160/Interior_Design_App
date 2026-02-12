import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <nav className="border-b bg-gradient-to-r from-accent to-[#B56A1F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

        <h1 className="text-2xl font-serif">Admin Panel</h1>

        <div className="flex gap-6">
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/clients">Clients</Link>
          <Link to="/admin/consultations">Consultations</Link>

          <button
            onClick={() => {
              localStorage.removeItem("adminToken");
              window.location.href = "/";
            }}
            className="ml-6 underline"
          >
            Logout
          </button>
        </div>

      </div>
    </nav>
  );
}
