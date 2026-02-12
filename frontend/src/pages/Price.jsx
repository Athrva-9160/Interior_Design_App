import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Price() {
  const [step, setStep] = useState(1);
  const [bhk, setBhk] = useState(null);
  const [sizeType, setSizeType] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [openBhk, setOpenBhk] = useState(null);

  const areaMap = {
    b1: 500, a1: 600,
    b2: 800, a2: 900,
    b3: 1100, a3: 1300,
    b4: 1400, a4: 1600,
    b5: 1800, a5: 2100
  };

  const priceMap = {
    essentials: 1200,
    premium: 1800,
    luxury: 2500
  };

  const calculatePrice = () => {
    if (!sizeType || !selectedPackage) return "Select all fields";
    const area = areaMap[sizeType];
    const base = area * priceMap[selectedPackage];
    const max = base * 1.2;

    return `₹${base.toLocaleString()} - ₹${max.toLocaleString()}`;
  };

  const goToStep = (n) => {
    setStep(n);
  };

  const toggleBHK = (n) => {
    setOpenBhk(openBhk === n ? null : n);
  };

  return (
    <>
    <Navbar />
    <div className="font-sans text-gray-900 bg-[#FAF8F5] min-h-screen">

      <section className="pb-32 bg-[#F5F5F7] min-h-screen">

        {/* PROGRESS BAR */}
        <div className="max-w-3xl mx-auto mt-10">
          <div className="flex justify-between text-xs font-medium text-gray-600 mb-3 px-4">
            <span>BHK TYPE</span>
            <span>ROOMS</span>
            <span>PACKAGE</span>
            <span>QUOTE</span>
          </div>

          <div className="w-full bg-gray-200 h-1 rounded-full">
            <div
              className="h-1 bg-accent rounded-full transition-all duration-300"
              style={{ width: `${step * 25}%` }}
            ></div>
          </div>

          <p className="text-right text-sm text-gray-500 mt-1">{step}/4</p>
        </div>

        {/* MAIN CARD */}
        <div className="max-w-3xl mx-auto mt-10 bg-white p-10 rounded-xl shadow">

          {/* ---------------------- STEP 1 ---------------------- */}
          {step === 1 && (
            <div>
              <h2 className="text-center text-2xl font-semibold mb-5">
                Select your BHK type
              </h2>

              <div className="space-y-4">

                {/* REPEATING BHK BLOCKS */}
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="border p-4 rounded-xl">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleBHK(num)}
                    >
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="bhk"
                          value={num}
                          className="h-5 w-5 text-accent"
                          onChange={() => setBhk(num)}
                        />
                        <span className="font-medium">{num} BHK{num === 5 && "+"}</span>
                      </label>
                      <span className="text-xl text-gray-500">
                        {openBhk === num ? "⌃" : "⌄"}
                      </span>
                    </div>

                    {/* SIZE OPTIONS */}
                    {openBhk === num && (
                      <div className="mt-4">
                        <div className="grid grid-cols-2 gap-4">
                          <label className="block border rounded-xl p-4 cursor-pointer hover:shadow">
                            <input
                              type="radio"
                              name="sizeType"
                              value={`b${num}`}
                              className="mr-2"
                              onChange={(e) => setSizeType(e.target.value)}
                            />
                            Below {num * 300 + 200} sq.ft
                          </label>

                          <label className="block border rounded-xl p-4 cursor-pointer hover:shadow">
                            <input
                              type="radio"
                              name="sizeType"
                              value={`a${num}`}
                              className="mr-2"
                              onChange={(e) => setSizeType(e.target.value)}
                            />
                            Above {num * 300 + 200} sq.ft
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

              </div>

              {/* NEXT BTN */}
              <div className="flex justify-end mt-10">
                <button
                  className="bg-accent text-white py-3 px-10 rounded-full hover:bg-[#B56A1F]"
                  onClick={() => goToStep(2)}
                >
                  NEXT
                </button>
              </div>
            </div>
          )}

          {/* ---------------------- STEP 2 ---------------------- */}
          {step === 2 && (
            <div>
              <h2 className="text-center text-2xl font-semibold mb-5">
                Rooms to Design
              </h2>

              {["Living Room", "Bedrooms", "Kitchen", "Bathrooms"].map((room) => (
                <label
                  key={room}
                  className="flex items-center gap-3 p-4 border rounded-xl hover:shadow cursor-pointer mb-4"
                >
                  <input type="checkbox" className="h-5 w-5 text-accent" />
                  {room}
                </label>
              ))}

              <div className="flex justify-between mt-10">
                <button
                  className="text-accent font-semibold"
                  onClick={() => goToStep(1)}
                >
                  BACK
                </button>

                <button
                  className="bg-accent text-white py-3 px-10 rounded-full hover:bg-[#B56A1F]"
                  onClick={() => goToStep(3)}
                >
                  NEXT
                </button>
              </div>
            </div>
          )}

          {/* ---------------------- STEP 3 ---------------------- */}
          {step === 3 && (
            <div>
              <h2 className="text-center text-2xl font-semibold mb-5">
                Choose your package
              </h2>

              {[
                ["essentials", "Essentials (₹1200/sq.ft)"],
                ["premium", "Premium (₹1800/sq.ft)"],
                ["luxury", "Luxury (₹2500/sq.ft)"],
              ].map(([value, label]) => (
                <label
                  key={value}
                  className="block border p-6 rounded-xl cursor-pointer hover:shadow mb-4"
                >
                  <input
                    type="radio"
                    name="package"
                    value={value}
                    className="h-5 w-5 mb-2"
                    onChange={(e) => setSelectedPackage(e.target.value)}
                  />
                  {label}
                </label>
              ))}

              <div className="flex justify-between mt-10">
                <button className="text-accent font-semibold" onClick={() => goToStep(2)}>
                  BACK
                </button>

                <button
                  className="bg-accent text-white py-3 px-10 rounded-full hover:bg-[#B56A1F]"
                  onClick={() => goToStep(4)}
                >
                  NEXT
                </button>
              </div>
            </div>
          )}

          {/* ---------------------- STEP 4 ---------------------- */}
          {step === 4 && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-5">Your Estimated Price</h2>

              <p className="text-3xl font-bold text-green-700 mb-8">
                {calculatePrice()}
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">

                <button
                  onClick={() => (window.location.href = "/")}
                  className="w-full md:w-40 bg-gray-200 text-gray-700 py-3 rounded-full hover:bg-gray-300 transition"
                >
                  OK
                </button>

                <a
                  href="/consultation"
                  className="w-full md:w-60 bg-accent text-white py-3 rounded-full hover:bg-[#B56A1F] transition text-center"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
