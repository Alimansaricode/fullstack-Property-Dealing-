import { useRef } from "react";
import Prices from "../Prices";
import Prices2 from "../prices2";

function Main2() {
  const sliderRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const mouseDown = (e) => {
    isDown = true;
    sliderRef.current.classList.add("cursor-grabbing");
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const mouseLeave = () => {
    isDown = false;
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const mouseUp = () => {
    isDown = false;
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const mouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // speed control
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full p-6">
      <h1 className="text-3xl font-semibold mb-4">Dream Home - India</h1>

      {/* DRAG SCROLL CONTAINER */}
      <div
        ref={sliderRef}
        onMouseDown={mouseDown}
        onMouseLeave={mouseLeave}
        onMouseUp={mouseUp}
        onMouseMove={mouseMove}
        className="flex gap-4 overflow-x-auto scrollbar-hide cursor-grab select-none"
      >
        {Prices2.map((item) => (
          <div
            key={item.id}
            className="min-w-[280px] bg-white border rounded-lg shadow"
          >
            {/* IMAGE */}
            <div className="relative h-40 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-t-lg pointer-events-none"
              />

              <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                {item.type}
              </span>

              <span className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {item.price}
              </span>
            </div>

            <div className="p-3 bg-white text-black rounded-b-lg">
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <p className="text-xs opacity-90">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main2;
