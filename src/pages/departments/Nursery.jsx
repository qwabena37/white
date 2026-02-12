import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Nursery() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our Nursery Department
            </h1>
            <p className="text-gray-200 mt-4 text-lg">
              Nurturing young minds with care, creativity, and fun learning.
            </p>
            <button
              onClick={() => navigate("/admissions")}
              className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Apply Now
            </button>
          </motion.div>
        </div>
      </div>

      {/* Description Section */}
      <div className="py-16 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-green-900 mb-4">
          What We Offer
        </h2>
        <p className="text-gray-700 text-lg">
          Our Nursery Department focuses on early childhood education with a
          playful and nurturing environment. We build social, cognitive, and
          emotional skills that set the foundation for lifelong learning.
        </p>
      </div>
    </div>
  );
}
