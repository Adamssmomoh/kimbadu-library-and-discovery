import React from "react";
import { weeklyRoutine } from "../data/weeklyRoutine";

function UpcomingEvents() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">🗓️ Weekly Routine in the Library</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {weeklyRoutine.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="text-indigo-600 font-semibold">{item.time}</p>
              <h3 className="text-xl font-bold mt-2">{item.activity}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
