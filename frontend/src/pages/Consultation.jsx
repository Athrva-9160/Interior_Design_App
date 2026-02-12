import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Consultation() {
  const [step, setStep] = useState(1);
  const [availableDates, setAvailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookingDone, setBookingDone] = useState(false);

  const [clientDocId, setClientDocId] = useState(null);

  const bookedDates = ["2026-01-20", "2026-01-22"];

  // Fetch the client document using user's ID
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    axios
      .get(`/api/clients/user/${userId}`)
      .then((res) => {
        setClientDocId(res.data._id);
        localStorage.setItem("clientDocId", res.data._id);
      })
      .catch((err) =>
        console.log("Client Fetch Error:", err.response?.data || err)
      );
  }, []);

  // Generate next 14 available dates
  useEffect(() => {
    const today = new Date();
    const dates = [];

    for (let i = 1; i <= 14; i++) {
      const nextDay = new Date();
      nextDay.setDate(today.getDate() + i);

      const iso = nextDay.toISOString().split("T")[0];

      if (!bookedDates.includes(iso)) {
        dates.push({
          label: nextDay.toDateString(),
          value: iso,
        });
      }
    }

    setAvailableDates(dates);
  }, []);

  const goToStep = (n) => setStep(n);

  // Save consultation
  const saveConsultation = async () => {
    try {
      const storedClientId =
        clientDocId || localStorage.getItem("clientDocId");

      if (!storedClientId) {
        alert("Error: Client not found. Please login again.");
        return;
      }

      await axios.post("/api/consultations", {
        clientId: storedClientId,
        consultationDate: selectedDate,
      });

      setBookingDone(true);
      goToStep(3);
    } catch (err) {
      console.log("Consultation Save Error:", err.response?.data || err);
      alert("Failed to save consultation");
    }
  };

  return (
    <>
      <Navbar />
      <section className="pb-32 bg-[#F5F5F7] min-h-screen">
        
        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto mt-10">
          <div className="flex justify-between text-xs font-medium text-gray-600 mb-3 px-4">
            <span>DATE</span>
            <span>CONFIRM</span>
            <span>DONE</span>
          </div>

          <div className="w-full bg-gray-200 h-1 rounded-full">
            <div
              className="h-1 bg-accent rounded-full transition-all duration-300"
              style={{ width: `${step * 33}%` }}
            ></div>
          </div>

          <p className="text-right text-sm text-gray-500 mt-1">{step}/3</p>
        </div>

        {/* Main Card */}
        <div className="max-w-3xl mx-auto mt-10 bg-white p-10 rounded-xl shadow">

          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <h2 className="text-center text-2xl font-semibold mb-8">
                Choose a Consultation Date
              </h2>

              <Calendar
                bookedDates={bookedDates}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />

              <div className="flex justify-end mt-10">
                <button
                  disabled={!selectedDate}
                  className={`py-3 px-10 rounded-full text-white ${
                    selectedDate
                      ? "bg-accent hover:bg-[#B56A1F]"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  onClick={() => goToStep(2)}
                >
                  NEXT
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-5">Confirm Your Date</h2>

              <p className="text-lg mb-8">
                You selected:
                <span className="font-bold text-accent">
                  {" "}
                  {new Date(selectedDate).toDateString()}
                </span>
              </p>

              <div className="flex justify-between mt-10">
                <button
                  className="text-accent font-semibold"
                  onClick={() => goToStep(1)}
                >
                  BACK
                </button>

                <button
                  className="bg-accent text-white py-3 px-10 rounded-full hover:bg-[#B56A1F]"
                  onClick={saveConsultation}
                >
                  CONFIRM BOOKING
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && bookingDone && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-5">
                Consultation Booked Successfully!
              </h2>

              <p className="text-lg text-green-700 mb-8">
                Your consultation is scheduled on:
                <br />
                <span className="font-bold text-accent">
                  {new Date(selectedDate).toDateString()}
                </span>
              </p>

              <Link
                to="/"
                className="bg-accent text-white py-3 px-10 rounded-full hover:bg-[#B56A1F]"
              >
                GO TO HOME
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
