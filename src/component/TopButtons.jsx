import React from "react";

export default function TopButtons({ setQuery }) {
  const cities = [
    { id: 1, title: "London" },
    { id: 2, title: "Sydney" },
    { id: 3, title: "Tokio" },
    { id: 4, title: "Toronto" },
    { id: 5, title: "Paris" },
  ];
  return (
    <div className="cities flex flex-wrap gap-2 items-center justify-around my-6 ">
      {cities.map((city) => (
        <button
          key={city.id}
          className="city text-white text-lg font-medium transition ease-out hover:text-blue-200  "
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}
