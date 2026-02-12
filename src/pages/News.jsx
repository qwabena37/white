export default function News() {
  const news = [
    { id: 1, title: "Inter-School Debate Competition", date: "Jan 20, 2026" },
    { id: 2, title: "Sports Festival", date: "Feb 15, 2026" },
    { id: 3, title: "Science & Tech Fair", date: "March 10, 2026" },
  ];

  return (
    <div className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900">
        News & Events
      </h2>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-xl rounded-xl p-6 hover:scale-105 transition"
          >
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-500 mt-2">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
