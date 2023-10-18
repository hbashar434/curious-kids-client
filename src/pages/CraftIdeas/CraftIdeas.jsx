import React from "react";

const CraftIdeas = () => {
  const craftIdeas = [
    {
      title: "Paper Plate Sunflower Craft",
      description: "Create a beautiful sunflower using paper plates, paint, and glue.",
      image: "https://i.ibb.co/sWKtZ9c/Sunflower-Craft.jpg",
    },
    {
      title: "Toilet Paper Roll Cars",
      description: "Turn empty toilet paper rolls into adorable toy cars with this fun DIY project.",
      image: "https://i.ibb.co/DzSbPHq/Toilet-Paper-Roll-Cars.jpg",
    },
    {
      title: "Sock Puppets",
      description: "Make colorful and expressive sock puppets using old socks, buttons, and yarn.",
      image: "https://i.ibb.co/6w14BDd/Sock-Puppets.jpg",
    },
    {
      title: "Cardboard Castle",
      description: "Construct a magnificent castle using cardboard boxes and let your child's imagination run wild.",
      image: "https://i.ibb.co/VN8MRwP/Cardboard-Castle.jpg",
    },
  ];

  return (
    <section className=" py-12 md:py-24">
      <div className="container mx-auto">
        <h2 className="my-title">DIY Craft Ideas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {craftIdeas.map((idea, index) => (
            <div key={index} className="bg-indigo-100 rounded-lg p-4 shadow-md transform hover:scale-105 transition-transform duration-300">
              <img
                src={idea.image}
                alt={idea.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{idea.title}</h3>
              <p className="text-blue-500">{idea.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftIdeas;
