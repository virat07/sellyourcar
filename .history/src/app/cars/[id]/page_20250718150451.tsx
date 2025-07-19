import { notFound } from "next/navigation";
import Link from "next/link";

const mockCars = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2021,
    price: 23999,
    image: "/car1.png",
    description: "A reliable, fuel-efficient sedan with advanced safety features and a comfortable ride.",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2020,
    price: 20999,
    image: "/car2.png",
    description: "A sporty compact car with modern tech, great mileage, and a stylish design.",
  },
  {
    id: 3,
    make: "Tesla",
    model: "Model 3",
    year: 2022,
    price: 37999,
    image: "/car4.png",
    description: "A cutting-edge electric sedan with autopilot, long range, and instant acceleration.",
  },
  {
    id: 4,
    make: "Ford",
    model: "Mustang",
    year: 2019,
    price: 28999,
    image: "/car3.png",
    description: "A classic American muscle car with powerful performance and iconic style.",
  },
];

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const car = mockCars.find((c) => c.id === Number(params.id));
  if (!car) return notFound();

  return (
    <main className="relative min-h-[90vh] pt-32 pb-16 px-4 flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient-move opacity-80" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-r from-cyan-400/30 via-blue-500/20 to-purple-600/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="relative z-10 max-w-3xl w-full mx-auto bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-400/30 p-10 flex flex-col md:flex-row gap-10 items-center">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full max-w-xs h-64 object-cover rounded-2xl border-2 border-cyan-400/30 shadow-xl mb-6 md:mb-0"
        />
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 animate-gradient-x mb-2">
            {car.year} {car.make} {car.model}
          </h1>
          <div className="text-cyan-300 font-extrabold text-3xl mb-2 drop-shadow-lg">
            ${car.price.toLocaleString()}
          </div>
          <p className="text-white/90 text-lg mb-4">{car.description}</p>
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white text-lg font-bold rounded-full shadow-lg hover:from-blue-500 hover:to-cyan-400 transition-all border border-blue-400/40 ring-2 ring-cyan-400/30 animate-glow">
            Start Purchase
          </button>
          <Link href="/cars" className="mt-4 text-cyan-300 hover:underline text-base">← Back to Browse Cars</Link>
        </div>
      </div>
    </main>
  );
} 