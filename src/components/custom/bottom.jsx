import React from "react";

const Bottom = () => {
  return (
    <div className="relative  overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-white/0 z-10" />
      <img
        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
        alt="Live event with BeatLine"
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Events?
          </h3>
          <p className="text-lg text-muted-foreground max-w-xl">
            Join thousands of venues and event organizers who trust BeatLine
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
