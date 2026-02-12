import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../AdminLayout";

export default function AdminClients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/clients")
      .then((res) => setClients(res.data));
  }, []);

  return (
    <AdminLayout>
      <h2 className="text-3xl font-serif mb-6">Clients</h2>

      <table className="w-full bg-white shadow border">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
          </tr>
        </thead>

        <tbody>
          {clients.map((c) => (
            <tr key={c._id} className="border-b">
              <td className="p-3">{c.name}</td>
              <td className="p-3">{c.email}</td>
              <td className="p-3">{c.phone}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </AdminLayout>
  );
}
