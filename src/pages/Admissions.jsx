import { motion } from "framer-motion";

export default function Admissions() {
  return (
    <div className="py-16 px-6 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold text-green-900 text-center"
      >
        Admissions
      </motion.h2>

      <div className="mt-8 space-y-6 text-gray-700">
        <p>📌 Admission forms are available at the school office.</p>
        <p>📌 Entrance exams conducted every August.</p>
        <p>📌 Scholarships available for outstanding students.</p>
      </div>

      <button className="mt-8 bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition">
        Download Admission Form
      </button>
    </div>
  );
}
