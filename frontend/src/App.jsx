import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminClients from "./admin/pages/AdminClients";
import AdminConsultations from "./admin/pages/AdminConsultations";
import AdminDashboard from "./admin/pages/AdminDashboard";
import Bathroom from "./pages/Bathroom.jsx";
import Bedroom from "./pages/Bedroom.jsx";
import Consultation from "./pages/Consultation.jsx";
import Home from "./pages/Home.jsx";
import Kitchen from "./pages/Kitchen.jsx";
import Livingroom from "./pages/Livingroom.jsx";
import Login from "./pages/Login.jsx";
import MyDesigns from "./pages/MyDesigns.jsx";
import Price from "./pages/Price.jsx";
import Register from "./pages/Register.jsx";


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
