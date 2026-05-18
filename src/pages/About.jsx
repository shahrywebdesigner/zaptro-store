import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="px-6 py-12 my-12 bg-white max-w-5xl mx-auto rounded-2xl border border-gray-100 shadow-xl">
      {/* Header Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
          About <span className="text-red-500">Zaptro</span>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Welcome to Zaptro, your ultimate destination for premium quality products. We bridge the gap between innovation and everyday convenience to bring you a handpicked collection designed to elevate your lifestyle.
        </p>
      </div>

      {/* Grid: Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="w-2 h-6 bg-red-500 rounded-full inline-block"></span>
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To empower our customers by providing seamless access to top-tier electronics and daily essentials. We are committed to high standards of operational reliability, transparency, and top-notch support throughout your e-commerce journey.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="w-2 h-6 bg-red-500 rounded-full inline-block"></span>
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To become a globally recognized marketplace leader known for putting customer experience first. We aim to consistently push boundaries with dynamic web features, personalized curation, and sustainable shipping methods worldwide.
          </p>
        </div>
      </div>

      {/* Feature Grid Section */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          Why Choose Zaptro?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Premium Curated Inventory",
            "Secure Checkout Systems",
            "Fast Regional Delivery Services",
            "Dedicated Support Channels",
            "Guaranteed Product Quality"
          ].map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-50 font-bold text-red-500 text-sm shrink-0">
                ✓
              </span>
              <p className="font-semibold text-gray-800 text-base">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Element */}
      <div className="bg-gray-950 text-white rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Join the Zaptro Family</h2>
          <p className="text-gray-400 mb-6 text-sm md:text-base leading-relaxed">
            Experience shopping tailored completely around your expectations. Explore our catalog today to unlock exclusive seasonal pricing discounts.
          </p>
          <Link to="/products">
            <button className="bg-red-500 hover:bg-red-600 font-semibold px-8 py-3 rounded-xl transition duration-300 shadow-md active:scale-[0.98]">
              Start Shopping
            </button>
          </Link>
        </div>
        {/* Subtle background abstract element */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/10 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default About;