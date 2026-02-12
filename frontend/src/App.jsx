import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/register.jsx";
import Kitchen from "./pages/Kitchen.jsx";
import Livingroom from "./pages/Livingroom.jsx";
import Bedroom from "./pages/Bedroom.jsx";
import Bathroom from "./pages/Bathroom.jsx";
import Price from "./pages/Price.jsx";
import Consultation from "./pages/Consultation.jsx";
import MyDesigns from "./pages/MyDesigns.jsx";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminClients from "./admin/pages/AdminClients";
import AdminConsultations from "./admin/pages/AdminConsultations";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/livingroom" element={<Livingroom />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/bathroom" element={<Bathroom />} />
        <Route path="/price" element={<Price />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/my-designs" element={<MyDesigns />} />
        <Route path="/my-designs/:category?" element={<MyDesigns />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/clients" element={<AdminClients />} />
        <Route path="/admin/consultations" element={<AdminConsultations />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
