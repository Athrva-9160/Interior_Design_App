import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";

export default function MyDesigns() {
  const { category } = useParams();
  const [designs, setDesigns] = useState([]);
  const [liked, setLiked] = useState([]);
  const userId = localStorage.getItem("userId");

  // Load liked designs for selected category
  useEffect(() => {
    if (!category) return;

    axios
      .get(`http://localhost:5000/api/liked/user/${userId}/${category}`)
      .then((res) => {
        setDesigns(res.data);

        // FIX: Store designId, not _id
        setLiked(res.data.map((d) => d.designId));
      });
  }, [category]);

  // FIX: toggle using designId
  const toggleLike = async (designId) => {
    if (liked.includes(designId)) {
      await axios.post("http://localhost:5000/api/liked/unlike", {
        userId,
        designId,
      });

      setLiked(liked.filter((id) => id !== designId));
      setDesigns(designs.filter((d) => d.designId !== designId));
    }
  };

  return (
    <>
      <Navbar />

      <section className="py-24 text-center bg-[#FAF8F5]">
        <h2 className="font-serif text-5xl mb-4">My Designs</h2>
        <p className="text-muted">View all your saved interior designs.</p>
      </section>

      {!category && (
        <section className="py-24 bg-[#FAF8F5]">
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 px-8">

            <Link to="/my-designs/kitchen" className="bg-white border p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl mb-2">Kitchen</h3>
              <p className="text-muted text-sm">Liked kitchen designs</p>
            </Link>

            <Link to="/my-designs/bedroom" className="bg-white border p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl mb-2">Bedroom</h3>
              <p className="text-muted text-sm">Liked bedroom designs</p>
            </Link>

            <Link to="/my-designs/livingroom" className="bg-white border p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl mb-2">Living Room</h3>
              <p className="text-muted text-sm">Liked living rooms</p>
            </Link>

            <Link to="/my-designs/bathroom" className="bg-white border p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl mb-2">Bathroom</h3>
              <p className="text-muted text-sm">Liked bathroom designs</p>
            </Link>

          </div>
        </section>
      )}

      {category && (
        <section className="pb-32 bg-[#FAF8F5] px-6">
          <div className="max-w-6xl mx-auto mb-10">
            <Link to="/my-designs" className="underline text-sm">
              ← Back to Categories
            </Link>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
            {designs.length === 0 ? (
              <p className="text-center text-gray-600 col-span-3">
                No liked designs in this category yet.
              </p>
            ) : (
              designs.map((d) => (
                <div key={d.designId} className="bg-white border relative">

                  <img src={d.imageUrl} className="h-64 w-full object-cover" />

                  {/* ⭐ FIX: use designId */}
                  <button
                    onClick={() => toggleLike(d.designId)}
                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-full border hover:bg-black hover:text-white transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 
                         0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 
                         3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </button>

                  <div className="p-4 text-center">
                    <h4 className="text-lg">{d.title}</h4>
                  </div>

                </div>
              ))
            )}
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
