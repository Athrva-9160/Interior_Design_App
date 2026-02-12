import AdminLayout from "../AdminLayout";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h2 className="text-3xl font-serif mb-6">Admin Dashboard</h2>

      <p className="text-gray-600">
        Welcome! Use the navigation bar to manage clients and consultations.
      </p>
    </AdminLayout>
  );
}
