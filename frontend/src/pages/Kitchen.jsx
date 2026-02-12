import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Kitchen() {
  const [designs, setDesigns] = useState([]);
  const [liked, setLiked] = useState([]);
  const userId = localStorage.getItem("userId");
  const category = "kitchen";

  // ✅ Load ALL kitchen designs (always runs once)
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/designs/${category}`)
      .then((res) => setDesigns(res.data))
      .catch((err) => console.log("Design Load Error:", err));
  }, []);

  // ✅ Load liked designs ONLY when userId exists
  useEffect(() => {
    if (!userId) return; // prevents null user error

    axios
      .get(`http://localhost:5000/api/liked/user/${userId}/${category}`)
      .then((res) => {
        const likedIds = res.data.map((item) => item.designId);
        setLiked(likedIds);
      })
      .catch((err) => console.log("Liked Fetch Error:", err));
  }, [userId]);

  // ✅ Like / Unlike Function
  const toggleLike = async (design) => {
    if (!userId) {
      alert("Please login first");
      return;
    }

    const designId = design._id;

    try {
      if (liked.includes(designId)) {
        // UNLIKE
        await axios.post("http://localhost:5000/api/liked/unlike", {
          userId,
          designId,
        });

        setLiked(liked.filter((id) => id !== designId));
      } else {
        // LIKE – send full details
        await axios.post("http://localhost:5000/api/liked", {
          userId,
          designId,
          category,
          title: design.title,
          imageUrl: design.imageUrl,
        });

        setLiked([...liked, designId]);
      }
    } catch (err) {
      console.log("Like/Unlike Error:", err.response?.data || err);
    }
  };

  return (
    <>
      <Navbar />

      {/* PAGE TITLE */}
      <section className="py-24 text-center bg-[#FAF8F5]">
        <h2 className="font-serif text-5xl mb-4">Kitchen Designs</h2>
        <p className="text-muted">
          Explore modern, modular, and functional kitchen interiors
        </p>
      </section>

      {/* DESIGN GRID */}
      <section className="pb-32 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {designs.map((d) => (
            <div key={d._id} className="bg-white border relative">
              {/* IMAGE */}
              <img src={d.imageUrl} className="h-64 w-full object-cover" />

              {/* LIKE BUTTON */}
              <button
                onClick={() => toggleLike(d)}
                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full border hover:bg-black hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill={liked.includes(d._id) ? "currentColor" : "none"}
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

              {/* TITLE */}
              <div className="p-4 text-center">
                <h4 className="text-lg">{d.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
