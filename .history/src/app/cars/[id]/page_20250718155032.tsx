"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

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
    features: ["Bluetooth Connectivity", "Backup Camera", "Lane Departure Warning", "Adaptive Cruise Control", "Apple CarPlay", "Android Auto"],
    specs: {
      engine: "2.5L 4-Cylinder",
      transmission: "8-Speed Automatic",
      drivetrain: "Front-Wheel Drive",
      fuelEconomy: "28 city / 39 highway mpg",
      seating: "5 passengers",
      cargo: "15.1 cu ft"
    },
    history: "Clean title, no accidents reported. Regular maintenance performed at authorized dealership.",
    warranty: "3-year/36,000-mile basic warranty, 5-year/60,000-mile powertrain warranty"
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
    features: ["Honda Sensing", "7-inch Touchscreen", "HondaLink", "Remote Engine Start", "Smart Entry", "Push Button Start"],
    specs: {
      engine: "2.0L 4-Cylinder",
      transmission: "CVT",
      drivetrain: "Front-Wheel Drive",
      fuelEconomy: "30 city / 38 highway mpg",
      seating: "5 passengers",
      cargo: "15.1 cu ft"
    },
    history: "Single owner, well-maintained. All service records available.",
    warranty: "3-year/36,000-mile basic warranty, 5-year/60,000-mile powertrain warranty"
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
    features: ["Autopilot", "15-inch Touchscreen", "Premium Audio", "Glass Roof", "Wireless Phone Charging", "Over-the-Air Updates"],
    specs: {
      engine: "Dual Motor AWD",
      transmission: "Single-Speed",
      drivetrain: "All-Wheel Drive",
      fuelEconomy: "358 miles range",
      seating: "5 passengers",
      cargo: "15 cu ft"
    },
    history: "Clean history, software updates current. Supercharger network access included.",
    warranty: "4-year/50,000-mile basic warranty, 8-year/120,000-mile battery warranty"
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
    features: ["SYNC 3", "Track Apps", "Launch Control", "Line Lock", "MyKey", "Shaker Pro Audio"],
    specs: {
      engine: "5.0L V8",
      transmission: "10-Speed Automatic",
      drivetrain: "Rear-Wheel Drive",
      fuelEconomy: "16 city / 25 highway mpg",
      seating: "4 passengers",
      cargo: "13.5 cu ft"
    },
    history: "Performance package, track-ready. Maintained by Ford specialists.",
    warranty: "3-year/36,000-mile basic warranty, 5-year/60,000-mile powertrain warranty"
  },
];

export default async function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [activeTab, setActiveTab] = useState("overview");
  
  const car = mockCars.find((c) => c.id === Number(id));
  if (!car) return notFound();

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-8">
            <h2 className="text-xl font-bold mb-2 text-gray-900">Overview</h2>
            <p className="text-gray-700 text-base">{car.description}</p>
          </div>
        );
      case "features":
        return (
          <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-8">
            <h2 className="text-xl font-bold mb-2 text-gray-900">Features & Specs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Key Features</h3>
                <ul className="space-y-1">
                  {car.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-700 text-base">• {feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Specifications</h3>
                <div className="space-y-1">
                  <p className="text-gray-700 text-base"><span className="font-medium">Engine:</span> {car.specs.engine}</p>
                  <p className="text-gray-700 text-base"><span className="font-medium">Transmission:</span> {car.specs.transmission}</p>
                  <p className="text-gray-700 text-base"><span className="font-medium">Drivetrain:</span> {car.specs.drivetrain}</p>
                  <p className="text-gray-700 text-base"><span className="font-medium">Fuel Economy:</span> {car.specs.fuelEconomy}</p>
                  <p className="text-gray-700 text-base"><span className="font-medium">Seating:</span> {car.specs.seating}</p>
                  <p className="text-gray-700 text-base"><span className="font-medium">Cargo:</span> {car.specs.cargo}</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "history":
        return (
          <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-8">
            <h2 className="text-xl font-bold mb-2 text-gray-900">History & Inspection</h2>
            <p className="text-gray-700 text-base">{car.history}</p>
          </div>
        );
      case "warranty":
        return (
          <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-8">
            <h2 className="text-xl font-bold mb-2 text-gray-900">Warranty</h2>
            <p className="text-gray-700 text-base">{car.warranty}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-[90vh] pt-12 pb-16 px-2 bg-white">
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
        {/* Tabs */}
        <div className="flex gap-8 border-b border-gray-200 mb-6">
          <button 
            onClick={() => setActiveTab("overview")}
            className={`py-2 px-4 font-semibold border-b-2 transition-colors ${
              activeTab === "overview" 
                ? "text-blue-700 border-blue-600 bg-white" 
                : "text-gray-500 border-transparent hover:text-blue-700"
            }`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab("features")}
            className={`py-2 px-4 font-semibold border-b-2 transition-colors ${
              activeTab === "features" 
                ? "text-blue-700 border-blue-600 bg-white" 
                : "text-gray-500 border-transparent hover:text-blue-700"
            }`}
          >
            Features & specs
          </button>
          <button 
            onClick={() => setActiveTab("history")}
            className={`py-2 px-4 font-semibold border-b-2 transition-colors ${
              activeTab === "history" 
                ? "text-blue-700 border-blue-600 bg-white" 
                : "text-gray-500 border-transparent hover:text-blue-700"
            }`}
          >
            History & Inspection
          </button>
          <button 
            onClick={() => setActiveTab("warranty")}
            className={`py-2 px-4 font-semibold border-b-2 transition-colors ${
              activeTab === "warranty" 
                ? "text-blue-700 border-blue-600 bg-white" 
                : "text-gray-500 border-transparent hover:text-blue-700"
            }`}
          >
            Warranty
          </button>
        </div>
        {/* Tab content */}
        {renderTabContent()}
      </div>
    </main>
  );
} 