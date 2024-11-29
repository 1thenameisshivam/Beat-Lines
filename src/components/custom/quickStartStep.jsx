import React from "react";

const QuickStartStep = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="p-3 bg-purple-100 rounded-full mb-4">
        <Icon className="w-6 h-6 text-orange-600" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default QuickStartStep;
