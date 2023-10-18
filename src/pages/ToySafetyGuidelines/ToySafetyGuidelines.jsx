import React from "react";
import {
  MdWarning,
  MdVerifiedUser,
  MdAccessibility,
  MdSecurity,
} from "react-icons/md";

const ToySafetyGuidelines = () => {
  const toySafetyGuidelines = [
    {
      id: 1,
      title: "Age-Appropriate Toys",
      description:
        "Ensure that the toys are suitable for your child's age. Check age recommendations on packaging.",
      icon: <MdWarning />,
    },
    {
      id: 2,
      title: "Small Parts",
      description:
        "Avoid toys with small parts that can be choking hazards for young children.",
      icon: <MdVerifiedUser />,
    },
    {
      id: 3,
      title: "Non-Toxic Materials",
      description:
        "Check that toys are made from non-toxic materials and are free from harmful chemicals.",
      icon: <MdAccessibility />,
    },
    {
      id: 4,
      title: "Supervision",
      description:
      "Always supervise your child during playtime, especially with new toys, for their safety.",
      icon: <MdSecurity />,
    },
  ];

  return (
    <section className=" md:py-24 py-12">
      <div className="container mx-auto">
        <h2 className="my-title">
          Toy Safety Guidelines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {toySafetyGuidelines.map((guideline) => (
            <div
              key={guideline.id}
              className="bg-purple-100 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:duration-300 hover:shadow-lg text-center"
            >
              <div className="flex items-center justify-center mb-4 text-4xl text-indigo-700">
                {guideline.icon}
              </div>
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                {guideline.title}
              </h3>
              <p className="text-gray-600">{guideline.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToySafetyGuidelines;
