import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { Sparkles, Gift } from "lucide-react";

const features = [
  "Unlimited Projects & Storage",
  "Advanced Analytics Dashboard",
  "Priority 24/7 Support",
  "Team Collaboration Tools",
  "Custom Integrations",
  "Advanced Security Features",
  "API Access",
  "Regular Updates",
];

const PricingCard = () => {
  return (
    <div className="min-w-screen text-orange-500 hover:text-orange-600 transition-colors">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <Gift className="w-16 h-16 " />
        </div>
        <h2 className="text-5xl font-bold text-gray-900  mb-6 leading-tight">
          Everything is <span className="">Free</span>
        </h2>
        <div className="flex items-center justify-center gap-3 text-2xl  mb-6">
          <Sparkles className="w-6 h-6" />
          <span className="font-semibold text-gray-900">
            Unlimited Access for Everyone
          </span>
          <Sparkles className="w-6 h-6" />
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We believe in making powerful tools accessible to everyone. No credit
          card required, no hidden fees, just pure value.
        </p>
      </div>
      <div className="bg-white mt-12 rounded-3xl shadow-2xl p-8 md:p-12 max-w-3xl mx-auto transform transition-all duration-300 hover:scale-[1.02]">
        <div className="text-center mb-8">
          <div className="text-6xl font-bold mb-4">$0</div>
          <div className="text-2xl font-semibold mb-2">Forever Free</div>
          <p className="">Access to all premium features at no cost</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                <Check className="w-4 h-4 " />
              </div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-6 text-sm">
          No credit card required • Cancel anytime • Instant access
        </p>
      </div>
      <div className="mt-16 text-center mb-5">
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join thousands of happy users who are already enjoying our platform.
          Start building something amazing today!
        </p>
      </div>
    </div>
  );
};

export default PricingCard;
