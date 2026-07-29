import Prices from "../Prices";
import image9 from "../assets/image9.png";
import { IoLocationOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

function Slider() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 600),
      setTimeout(() => setStep(2), 1200),
      setTimeout(() => setStep(3), 1900),
      setTimeout(() => setStep(4), 2500),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image9})` }}
    >
      <div className="ml-28 max-lg:ml-12 max-md:ml-6">
        {/* Location */}
        <h1
          className={`pt-72 text-white transition-all duration-700
            ${step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <IoLocationOutline className="inline mr-2" />
          You are here
        </h1>

        {/* Heading */}
        <h1
          className={`text-5xl font-bold text-white py-5 transition-all duration-700
            ${step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          Let's Find Your Property
        </h1>

        {/* Paragraph 1 */}
        <p
          className={`text-white my-2 max-w-xl overflow-hidden  transition-all duration-700
            ${step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          Welcome to PropertyWala.com — one of India's top real estate portals where you can easily search
        </p>

        {/* Paragraph 2 */}
        <p
          className={`text-white max-w-xl transition-all duration-700
            ${step >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          buy,sell, or rent your next property. We connect buyers, sellers, and
          agents with trusted listings.
        </p>
        

      </div>
     
    </div>
  );
}

export default Slider;
