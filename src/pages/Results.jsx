export default function Results() {
  return (
    <div className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-green-900">
        Academic Excellence
      </h2>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="bg-yellow-400 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold">98%</h3>
          <p>BECE Pass Rate</p>
        </div>

        <div className="bg-blue-900 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold">15+</h3>
          <p>Regional Awards</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold">1000+</h3>
          <p>Graduates</p>
        </div>
      </div>
    </div>
  );
}
