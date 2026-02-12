import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LoginModal from "../components/LoginModal";
import { useEffect, useState } from "react";

export default function Home() {
  // For login button visibility
  const userId = localStorage.getItem("userId");

  // Popup login after 15 seconds
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoginPopup(true);
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  if (userId && showLoginPopup) {
    setShowLoginPopup(false);
  }

  // Close popup if user logs in
  useEffect(() => {
    if (userId && showLoginPopup) {
      setShowLoginPopup(false);
    }
  }, [userId, showLoginPopup]);

  // LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    // Refresh after logging out
    window.location.reload();
  };

  // Scroll function for portfolio section
  const scrollProjects = (direction) => {
    const container = document.getElementById("projectsScroll");
    const cardWidth = 340;
    const gap = 32;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="py-32 bg-gradient-to-b from-white to-[#FAF8F5]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-5xl leading-tight mb-8">
            Thoughtfully Designed <br />
            Interiors for Modern Homes
          </h2>

          <p className="text-muted text-lg mb-12">
            End-to-end interior design solutions crafted with precision, warmth,
            and timeless aesthetics.
          </p>

          <div className="flex justify-center space-x-4">
            <Link
              to="/consultation"
              className="bg-black text-white px-8 py-3 text-sm"
            >
              Get Free Consultation
            </Link>
            <Link to="/price" className="border px-8 py-3 text-sm">
              {" "}
              Calculate Price{" "}
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#F1EEE9] py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <h3 className="text-3xl font-medium">500+</h3>
            <p className="text-muted mt-2">Homes Designed</p>
          </div>
          <div>
            <h3 className="text-3xl font-medium">8+</h3>
            <p className="text-muted mt-2">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-medium">10+</h3>
            <p className="text-muted mt-2">Cities Served</p>
          </div>
          <div>
            <h3 className="text-3xl font-medium">1200+</h3>
            <p className="text-muted mt-2">Design Concepts</p>
          </div>
        </div>
      </section>

      {/* DESIGN CATEGORIES */}
      <section className="py-32 bg-white">
        <div className="max-w-8xl mx-auto px-20">
          <h2 className="font-serif text-4xl mb-20 text-center">
            Explore Design Categories
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Kitchen */}
            <div className="bg-white border overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800"
                alt="Kitchen Interior"
                className="h-56 w-full object-cover group-hover:scale-105 transition"
              />
              <div className="p-6 text-center">
                <h4 className="text-xl mb-2">Kitchen</h4>
                <p className="text-muted mb-4">Modular & functional</p>
                <Link
                  to="/kitchen"
                  className="text-sm border px-5 py-2 hover:bg-black hover:text-white transition"
                >
                  View Designs
                </Link>
              </div>
            </div>

            {/* Living Room */}
            <div className="bg-white border overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800"
                alt="Living Room Interior"
                className="h-56 w-full object-cover group-hover:scale-105 transition"
              />
              <div className="p-6 text-center">
                <h4 className="text-xl mb-2">Living Room</h4>
                <p className="text-muted mb-4">Comfortable & elegant</p>
                <Link
                  to="/livingroom"
                  className="text-sm border px-5 py-2 hover:bg-black hover:text-white transition"
                >
                  View Designs
                </Link>
              </div>
            </div>

            {/* Bedroom */}
            <div className="bg-white border overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800"
                alt="Bedroom Interior"
                className="h-56 w-full object-cover group-hover:scale-105 transition"
              />
              <div className="p-6 text-center">
                <h4 className="text-xl mb-2">Bedroom</h4>
                <p className="text-muted mb-4">Calm & personalized</p>
                <Link
                  to="/bedroom"
                  className="text-sm border px-5 py-2 hover:bg-black hover:text-white transition"
                >
                  View Designs
                </Link>
              </div>
            </div>

            {/* Bathroom */}
            <div className="bg-white border overflow-hidden group">
              <img
                src="https://www.beautifulhomes.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bathroom/modern-minimalist-bathroom-with-warm-greige-tones-and-fluted-vanity/luxury-bathroom-with-modern-fittings.jpg.transform/bh-gallery-listing/image.webp"
                alt="Bathroom Interior"
                className="h-56 w-full object-cover group-hover:scale-105 transition"
              />
              <div className="p-6 text-center">
                <h4 className="text-xl mb-2">Bathroom</h4>
                <p className="text-muted mb-4">Modern utility designs</p>
                <Link
                  to="/bathroom"
                  className="text-sm border px-5 py-2 hover:bg-black hover:text-white transition"
                >
                  View Designs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-32 bg-[#FAF8F5]">
        <div className="max-w-8xl mx-auto px-20">
          <h2 className="font-serif text-4xl mb-16 text-center">
            Recent Projects
          </h2>

          <div className="relative">
            <button
              onClick={() => scrollProjects(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur border px-4 py-3 hover:bg-black hover:text-white transition"
            >
              ←
            </button>

            <button
              onClick={() => scrollProjects(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur border px-4 py-3 hover:bg-black hover:text-white transition"
            >
              →
            </button>

            <div
              id="projectsScroll"
              className="flex space-x-8 overflow-x-hidden scroll-smooth"
            >
              {/* CARD EXAMPLES */}
              <div className="min-w-[320px] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200"
                  className="h-64 w-full object-cover"
                />
                <div className="p-5">
                  <h4>2BHK Modern Home</h4>
                  <p className="text-muted text-sm">Mumbai</p>
                </div>
              </div>

              <div className="min-w-[320px] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200"
                  className="h-64 w-full object-cover"
                />
                <div className="p-5">
                  <h4>Luxury Villa</h4>
                  <p className="text-muted text-sm">Pune</p>
                </div>
              </div>

              <div className="min-w-[320px] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200"
                  className="h-64 w-full object-cover"
                />
                <div className="p-5">
                  <h4>Compact Apartment</h4>
                  <p className="text-muted text-sm">Thane</p>
                </div>
              </div>

              <div className="min-w-[320px] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200"
                  className="h-64 w-full object-cover"
                />
                <div className="p-5">
                  <h4>Studio Apartment</h4>
                  <p className="text-muted text-sm">Navi Mumbai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-20">
          <h2 className="font-serif text-4xl mb-20 text-center">
            Our Design Process
          </h2>

          <div className="grid md:grid-cols-4 gap-16 text-center">
            {/* Consultation */}
            <div>
              <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center border rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <h4 className="mb-2">Consultation</h4>
              <p className="text-muted text-sm">Understanding requirements</p>
            </div>

            {/* Design */}
            <div>
              <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center border rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6V4m0 16v-2m8-6h-2M6 12H4m12.364-5.364l-1.414 1.414M8.05 15.95l-1.414 1.414m0-11.314l1.414 1.414m7.314 7.314l1.414 1.414"
                  />
                </svg>
              </div>
              <h4 className="mb-2">Design</h4>
              <p className="text-muted text-sm">3D & layout planning</p>
            </div>

            {/* Execution */}
            <div>
              <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center border rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.7 6.3l3 3-8.4 8.4H6.3v-3l8.4-8.4zM17.7 3.3a1 1 0 011.4 0l1.6 1.6a1 1 0 010 1.4l-1.3 1.3-3-3 1.3-1.3z"
                  />
                </svg>
              </div>
              <h4 className="mb-2">Execution</h4>
              <p className="text-muted text-sm">On-site implementation</p>
            </div>

            {/* Handover */}
            <div>
              <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center border rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="mb-2">Handover</h4>
              <p className="text-muted text-sm">Final delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-[#F1EEE9]">
        <div className="max-w-8xl mx-auto px-20 text-center">
          <h2 className="font-serif text-4xl mb-20">What Our Clients Say</h2>

          <p className="italic mb-6">
            “The team transformed our house into a beautiful home. The design
            and execution were flawless.”
          </p>
          <p className="text-muted">— Client, Mumbai</p>
        </div>
      </section>

      {/* PRICE ESTIMATOR CTA */}
      <section className="py-24 bg-white text-center">
        <h2 className="font-serif text-4xl mb-6">
          Estimate Your Interior Cost
        </h2>
        <p className="text-muted mb-8">
          Get an approximate cost based on your home size and requirements.
        </p>

        <Link
          to="/price"
          className="border px-8 py-3 text-sm hover:bg-black hover:text-white transition"
        >
          Calculate Price
        </Link>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-accent to-[#B56A1F] py-28">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="font-serif text-4xl mb-6">Speak with a Designer</h2>
          <p className="mb-10 text-sm">
            Get expert guidance tailored to your home and lifestyle.
          </p>
          <Link
            to="/consultation"
            className="bg-white text-black px-8 py-3 text-sm"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>

      {/*  SHOW LOGIN BUTTON IF NOT LOGGED IN */}
      {!userId && (
        <button
          onClick={() => setShowLoginPopup(true)}
          className="fixed bottom-6 right-6 bg-black text-white px-5 py-3 rounded-full shadow-lg z-50"
        >
          Login / Register
        </button>
      )}

      {/* SHOW LOGOUT BUTTON IF USER IS LOGGED IN */}
      {userId && (
        <button
          onClick={handleLogout}
          className=" fixed bottom-6 right-6 bg-gray-500/60 text-white px-5 py-3 rounded-full shadow-lg z-50 backdrop-blur-sm   hover:bg-gray-700/80 transition"
        >
          Logout
        </button>
      )}

      {/* LOGIN POPUP ONLY IF NOT LOGGED IN) */}
      {!userId && (
        <LoginModal
          show={showLoginPopup}
          onClose={() => setShowLoginPopup(false)}
        />
      )}

      {/* FOOTER */}
      <Footer />
    </>
  );
}
