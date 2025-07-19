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
    <main className="min-h-[90vh] pt-28 pb-16 px-2 bg-white">
      <h2 className="text-4xl font-extrabold mb-10 text-blue-900 text-center">Browse Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {mockCars.map((car) => (
          <Link
            key={car.id}
            href={`/cars/${car.id}`}
            className="group bg-white border border-gray-200 rounded-2xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-all"
          >
            <img
              src={car.image}
              alt={`${car.make} ${car.model}`}
              className="w-full h-40 object-cover rounded-xl mb-4 border border-gray-100"
            />
            <div className="text-lg font-bold mb-1 text-gray-900">
              {car.year} {car.make} {car.model}
            </div>
            <div className="text-blue-600 font-extrabold text-2xl mb-2">
              ${car.price.toLocaleString()}
            </div>
            <span className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-full shadow font-semibold hover:bg-blue-700 transition-all">
              View Details
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
} 