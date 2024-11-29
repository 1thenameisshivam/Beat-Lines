import React from "react";
import { Beer, Mic2, Home, Music } from "lucide-react";

const Showcase = () => {
  const useCases = [
    {
      title: "Bars & Pubs",
      description:
        "Let patrons influence the atmosphere while maintaining full control over the music selection.",
      icon: Beer,
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80",
    },
    {
      title: "Live Events",
      description:
        "Engage your audience with interactive music selection during live performances and events.",
      icon: Mic2,
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80",
    },
    {
      title: "House Parties",
      description:
        "Transform your house party with a democratic music selection system everyone can enjoy.",
      icon: Home,
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
    },
  ];
  return (
    <section className="">
      <div className="container mx-auto px-4">
        {/* Use Cases Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-2xl mb-6">
            <Music className="w-8 h-8 text-indigo-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Perfect for Every Occasion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our platform adapts to different environments and
            enhances every musical experience
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute inset-0">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                </div>

                <div className="relative p-8 h-full flex flex-col justify-end">
                  <div className="mb-4 transform transition-all duration-300 group-hover:-translate-y-2">
                    <Icon className="w-10 h-10 text-indigo-400 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-200 text-lg">
                      {useCase.description}
                    </p>
                  </div>

                  <div className="transform translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <button className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
