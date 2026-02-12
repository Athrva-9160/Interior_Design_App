import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const role = localStorage.getItem("userRole");

  useEffect(() => {
    if (role !== "admin") {
      navigate("/");  // block non-admins
    }
  }, [role]);

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen bg-[#FAF8F5] p-6">
        {children}
      </div>
    </>
  );
}
