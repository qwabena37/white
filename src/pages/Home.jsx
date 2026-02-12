import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <div
        className="relative h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588072432836-e10032774350')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Welcome to White Dove School Complex
            </h1>
            <p className="text-gray-200 mt-4 text-lg">
              Excellence • Discipline • Leadership
            </p>

            <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Apply Now
            </button>
          </motion.div>
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
