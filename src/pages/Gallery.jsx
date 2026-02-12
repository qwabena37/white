export default function Gallery() {
  return (
    <div className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-green-900">
        School Gallery
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350"
          alt="Students"
          className="rounded-lg shadow-md"
        />
        <img
          src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178"
          alt="Classroom"
          className="rounded-lg shadow-md"
        />
        <img
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
          alt="Library"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
