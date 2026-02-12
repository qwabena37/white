export default function Departments() {
  return (
    <div className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-green-900">
        Our Departments
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="font-bold text-lg">Nursery</h3>
          <p>Early childhood foundation program.</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="font-bold text-lg">Primary</h3>
          <p>Strong academic and moral development.</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="font-bold text-lg">Junior High</h3>
          <p>Preparing students for higher education.</p>
        </div>
      </div>
    </div>
  );
}
