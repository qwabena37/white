export default function Staff() {
  const staff = [
    { name: "Mrs. Grace Mensah", role: "Headmistress" },
    { name: "Mr. Daniel Owusu", role: "Mathematics Teacher" },
    { name: "Miss Linda Asare", role: "Science Teacher" },
  ];

  return (
    <div className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-green-900">
        Meet Our Staff
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {staff.map((person, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition"
          >
            <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full"></div>
            <h3 className="mt-4 font-bold">{person.name}</h3>
            <p className="text-gray-500">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
