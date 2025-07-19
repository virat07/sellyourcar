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
    gallery: ["/car1.png", "/car2.png", "/car3.png", "/car4.png"],
    description: "A reliable, fuel-efficient sedan with advanced safety features and a comfortable ride.",
    stock: "123456",
    vin: "1HGCM82633A123456",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2020,
    price: 20999,
    image: "/car2.png",
    gallery: ["/car2.png", "/car1.png", "/car3.png", "/car4.png"],
    description: "A sporty compact car with modern tech, great mileage, and a stylish design.",
    stock: "654321",
    vin: "2HGCM82633A654321",
  },
  {
    id: 3,
    make: "Tesla",
    model: "Model 3",
    year: 2022,
    price: 37999,
    image: "/car4.png",
    gallery: ["/car4.png", "/car1.png", "/car2.png", "/car3.png"],
    description: "A cutting-edge electric sedan with autopilot, long range, and instant acceleration.",
    stock: "789012",
    vin: "5YJ3E1EA7KF789012",
  },
  {
    id: 4,
    make: "Ford",
    model: "Mustang",
    year: 2019,
    price: 28999,
    image: "/car3.png",
    gallery: ["/car3.png", "/car1.png", "/car2.png", "/car4.png"],
    description: "A classic American muscle car with powerful performance and iconic style.",
    stock: "345678",
    vin: "1FA6P8TH0K5345678",
  },
];

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const car = mockCars.find((c) => c.id === Number(params.id));
  if (!car) return notFound();

  return (
    <main className="min-h-[90vh] pt-28 pb-16 px-2 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        {/* Top section: Title, price, info */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <Link href="/cars" className="text-blue-600 hover:underline text-base mb-2 inline-block">&larr; Back to Browse Cars</Link>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
              {car.year} {car.make} {car.model}
            </h1>
            <div className="flex items-center gap-6 mb-2">
              <span className="text-blue-700 font-extrabold text-2xl">${car.price.toLocaleString()}</span>
              <span className="text-gray-500 text-base">Stock #{car.stock}</span>
              <span className="text-gray-500 text-base">VIN {car.vin}</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <button className="px-8 py-3 bg-blue-600 text-white text-lg font-bold rounded-full shadow hover:bg-blue-700 transition-all">
                Start Purchase
              </button>
            </div>
          </div>
        </div>
        {/* Image gallery */}
        <div className="w-full bg-gray-50 rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={car.image}
              alt={`${car.make} ${car.model}`}
              className="w-full md:w-1/2 h-72 object-cover rounded-xl border border-gray-200 shadow"
            />
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {car.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="Car thumbnail"
                  className="w-full h-28 object-cover rounded-lg border border-gray-100"
                />
              ))}
            </div>
          </div>
        </div>
        {/* Tabs (static for now) */}
        <div className="flex gap-8 border-b border-gray-200 mb-6">
          <button className="py-2 px-4 text-blue-700 font-semibold border-b-2 border-blue-600 bg-white">Overview</button>
          <button className="py-2 px-4 text-gray-500 font-semibold hover:text-blue-700">Features & specs</button>
          <button className="py-2 px-4 text-gray-500 font-semibold hover:text-blue-700">History & Inspection</button>
          <button className="py-2 px-4 text-gray-500 font-semibold hover:text-blue-700">Warranty</button>
        </div>
        {/* Overview section */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-8">
          <h2 className="text-xl font-bold mb-2 text-gray-900">Overview</h2>
          <p className="text-gray-700 text-base">{car.description}</p>
        </div>
      </div>
    </main>
  );
} 