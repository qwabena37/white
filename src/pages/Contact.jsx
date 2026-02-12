export default function Contact() {
  return (
    <div className="py-16 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-green-900">
        Contact Us
      </h2>

      <form className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 border rounded"
        ></textarea>

        <button className="bg-green-900 text-white px-6 py-3 rounded hover:bg-yellow-700">
          Send Message
        </button>
      </form>
    </div>
  );
}
