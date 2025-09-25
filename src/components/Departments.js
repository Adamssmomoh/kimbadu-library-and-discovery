import React from "react";
import { Link } from "react-router-dom";
import { departments } from "../data/departments";

function Departments() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Departments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <Link
              key={index}
              to={dept.name === "Literacy Program" ? "/literacy-program" : "#"} // Add more routes as needed
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center"
            >
              <div className="mb-4 text-indigo-600">{dept.icon}</div>
              <p className="text-lg font-semibold">{dept.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Departments;
