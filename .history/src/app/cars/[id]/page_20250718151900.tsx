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
    <main className="min-h-[90vh] pt-28 pb-16 px-2 bg-white flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-3xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full max-w-xs h-64 object-cover rounded-2xl border border-gray-100 shadow mb-6 md:mb-0"
        />
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-extrabold text-blue-900 mb-2">
            {car.year} {car.make} {car.model}
          </h1>
          <div className="text-blue-600 font-extrabold text-2xl mb-2">
            ${car.price.toLocaleString()}
          </div>
          <p className="text-gray-700 text-lg mb-4">{car.description}</p>
          <button className="px-8 py-3 bg-blue-600 text-white text-lg font-bold rounded-full shadow hover:bg-blue-700 transition-all">
            Start Purchase
          </button>
          <Link href="/cars" className="mt-4 text-blue-600 hover:underline text-base"> Back to Browse Cars</Link>
        </div>
      </div>
    </main>
  );
} 