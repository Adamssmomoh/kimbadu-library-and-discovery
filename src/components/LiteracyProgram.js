import React from 'react';

const LiteracyProgram = () => {
  return (
    <section id="literacy" className="px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">Literacy Program</h2>
        <p className="text-gray-600">
          Our literacy program is designed to help readers of all ages
          improve their reading, writing and numeracy skills.
        </p>
      </div>
      <img
        src="home image/numeracy.jpg"
        alt="Literacy Program"
        className="rounded-lg shadow-lg"
      />
    </section>
  );
};

export default LiteracyProgram;
