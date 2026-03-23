const Grocery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-2xl">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="inline-block bg-gradient-to-br from-orange-400 to-orange-600 rounded-full p-8 shadow-lg animate-bounce">
            <span className="text-6xl">🛒</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Coming Soon!
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
          We're working on bringing fresh groceries to your doorstep
        </p>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            🌱 Fresh produce, pantry essentials, and everyday items will be
            available soon
          </p>
          <div className="space-y-3 text-left inline-block">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span className="text-gray-600">Same-day delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span className="text-gray-600">Quality guaranteed</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span className="text-gray-600">Best prices</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-3">We're 85% ready</p>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-orange-400 to-orange-600 h-full rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <p className="text-gray-600 font-semibold">
            Get notified when we launch!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none text-gray-700 placeholder-gray-400 w-full sm:flex-1"
            />
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl whitespace-nowrap">
              Notify Me
            </button>
          </div>
        </div>

        {/* Bottom Message */}
        <p className="mt-8 text-sm text-gray-500">
          Thank you for your patience! We can't wait to serve you fresh
          groceries soon. 🎉
        </p>
      </div>
    </div>
  );
};

export default Grocery;
