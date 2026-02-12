import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../AdminLayout";

export default function AdminConsultations() {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/consultations")
      .then((res) => setConsultations(res.data))
      .catch((err) =>
        console.log("Consultation Fetch Error:", err.response?.data || err)
      );
  }, []);

  return (
    <AdminLayout>
      <h2 className="text-3xl font-serif mb-6">Consultations</h2>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 font-semibold">Client</th>
              <th className="p-3 font-semibold">Email</th>
              <th className="p-3 font-semibold">Phone</th>
              <th className="p-3 font-semibold">Consultation Date</th>
            </tr>
          </thead>

          <tbody>
            {consultations.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No Consultations Found
                </td>
              </tr>
            ) : (
              consultations.map((item) => (
                <tr
                  key={item.consultationId}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.phone}</td>
                  <td className="p-3">
                    {new Date(item.consultationDate).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
