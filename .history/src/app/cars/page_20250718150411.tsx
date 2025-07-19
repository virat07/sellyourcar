import Link from "next/link";

const mockCars = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2021,
    price: 23999,
    image: "/car1.png",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2020,
    price: 20999,
    image: "/car2.png",
  },
  {
    id: 3,
    make: "Tesla",
    model: "Model 3",
    year: 2022,
    price: 37999,
    image: "/car4.png",
  },
  {
    id: 4,
    make: "Ford",
    model: "Mustang",
    year: 2019,
    price: 28999,
    image: "/car3.png",
  },
];

export default function CarsPage() {
  return (
    <main className="relative min-h-[90vh] pt-32 pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient-move opacity-80" />
      <h2 className="text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 animate-gradient-x text-center">Browse Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {mockCars.map((car) => (
          <Link
            key={car.id}
            href={`/cars/${car.id}`}
            className="group bg-white/10 backdrop-blur-lg border border-blue-400/30 rounded-2xl shadow-xl p-4 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl hover:border-cyan-400/60 relative overflow-hidden"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-24 bg-gradient-to-r from-cyan-400/30 via-blue-500/20 to-purple-600/30 rounded-full blur-2xl opacity-70 group-hover:opacity-90 transition" />
            <img
              src={car.image}
              alt={`${car.make} ${car.model}`}
              className="w-full h-40 object-cover rounded-xl mb-4 border-2 border-cyan-400/20 group-hover:border-cyan-400/60 transition"
            />
            <div className="text-lg font-bold mb-1 text-white/90 drop-shadow-lg">
              {car.year} {car.make} {car.model}
            </div>
            <div className="text-cyan-300 font-extrabold text-2xl mb-2 drop-shadow-lg">
              ${car.price.toLocaleString()}
            </div>
            <span className="mt-auto px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full shadow-lg font-semibold border border-blue-400/40 group-hover:from-blue-500 group-hover:to-cyan-400 transition-all animate-glow">
              View Details
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
} 