import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
      title: "Welcome to White Dove School Complex",
      subtitle: "Excellence • Discipline • Leadership",
    },
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "A Place to Grow",
      subtitle: "Nurturing every child to reach their full potential",
    },
    {
      img: "https://images.unsplash.com/photo-1596495577886-d920f1f44d63",
      title: "Innovative Learning Environment",
      subtitle: "Where creativity meets academic excellence",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  // Optional: Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative">
      {/* HERO CAROUSEL */}
      <div className="relative h-[90vh] overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url('${slide.img}')` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === current ? 1 : 0 }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
              {index === current && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-white">
                    {slide.title}
                  </h1>
                  <p className="text-gray-200 mt-4 text-lg">
                    {slide.subtitle}
                  </p>

                  <button
                    onClick={() => navigate("/admissions")}
                    className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                  >
                    Apply Now
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
        >
          <FaArrowRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition ${
                idx === current ? "bg-yellow-400" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* NEWS PREVIEW */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold text-green-900">Latest News</h2>
        <p className="text-gray-600 mt-4">
          Stay updated with our latest school activities.
        </p>
      </div>
    </div>
  );
}
