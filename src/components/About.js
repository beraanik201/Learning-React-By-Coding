import UserFunctionalComponent from "./UserFunctionalComponent";
import UserClassComponent from "./UserClassComponent";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-6 sm:py-10 px-3 sm:px-4">
      {/* Hero Section */}
      <div className="w-full mx-auto mb-12 sm:mb-16">
        <div className="text-center mb-8 sm:mb-12 px-1 sm:px-2">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 sm:mb-4">
            About BBQ Zone
          </h1>
          <p className="text-xs sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Connecting food lovers with their favorite restaurants, one delivery
            at a time
          </p>
        </div>

        {/* Hero Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {/* Mission Card */}
          <div className="bg-white rounded-lg shadow-md sm:shadow-lg p-4 sm:p-8 hover:shadow-lg sm:hover:shadow-xl transition-shadow duration-300">
            <div className="text-orange-500 text-2xl sm:text-4xl mb-3 sm:mb-4">
              🎯
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600 text-xs sm:text-base leading-relaxed">
              We aim to revolutionize the way people enjoy food by providing
              quick, reliable, and hassle-free delivery services. Our goal is to
              make delicious food accessible to everyone, everywhere.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-lg shadow-md sm:shadow-lg p-4 sm:p-8 hover:shadow-lg sm:hover:shadow-xl transition-shadow duration-300">
            <div className="text-orange-500 text-2xl sm:text-4xl mb-3 sm:mb-4">
              🌟
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
              Our Vision
            </h2>
            <p className="text-gray-600 text-xs sm:text-base leading-relaxed">
              To become the most trusted and preferred food delivery platform in
              the world, known for excellence, innovation, and customer
              satisfaction beyond expectations.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-800 text-center mb-4 sm:mb-8">
            Why Choose BBQ Zone?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-block bg-orange-100 rounded-full p-2.5 sm:p-4 mb-3 sm:mb-4">
                <span className="text-lg sm:text-2xl">⚡</span>
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                Lightning Fast
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Average delivery time of 30 minutes to your doorstep
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-block bg-orange-100 rounded-full p-2.5 sm:p-4 mb-3 sm:mb-4">
                <span className="text-lg sm:text-2xl">🍽️</span>
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                Wide Selection
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                1000+ restaurants with diverse cuisines to choose from
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-block bg-orange-100 rounded-full p-2.5 sm:p-4 mb-3 sm:mb-4">
                <span className="text-lg sm:text-2xl">💰</span>
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                Best Prices
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Exclusive discounts and offers available daily
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-block bg-orange-100 rounded-full p-2.5 sm:p-4 mb-3 sm:mb-4">
                <span className="text-lg sm:text-2xl">✅</span>
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                Quality Assured
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Verified restaurants with strict quality standards
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-block bg-orange-100 rounded-full p-2.5 sm:p-4 mb-3 sm:mb-4">
                <span className="text-lg sm:text-2xl">📱</span>
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                Easy to Use
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Simple interface for seamless ordering experience
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-block bg-orange-100 rounded-full p-2.5 sm:p-4 mb-3 sm:mb-4">
                <span className="text-lg sm:text-2xl">🛡️</span>
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                Safe & Secure
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Secure payments and safe food handling practices
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-orange-500 rounded-lg sm:rounded-2xl text-white py-6 sm:py-12 px-3 sm:px-8 mb-12 sm:mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                50M+
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-orange-100">
                Happy Customers
              </p>
            </div>
            <div>
              <div className="text-xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                100K+
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-orange-100">
                Partner Restaurants
              </p>
            </div>
            <div>
              <div className="text-xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                15M+
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-orange-100">
                Monthly Deliveries
              </p>
            </div>
            <div>
              <div className="text-xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                50+
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-orange-100">
                Cities Covered
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-800 text-center mb-4 sm:mb-8">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-white rounded-lg shadow-md sm:shadow-lg p-4 sm:p-8 hover:shadow-lg sm:hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm sm:text-2xl font-bold flex-shrink-0">
                  AB
                </div>
                <div>
                  <h3 className="text-sm sm:text-xl font-bold text-gray-800">
                    Anik Bera
                  </h3>
                  <p className="text-orange-500 font-semibold text-xs sm:text-sm">
                    Developer
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-xs sm:text-base">
                Passionate full-stack developer building amazing web experiences
                with React and modern technologies. Based in Kolkata.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md sm:shadow-lg p-4 sm:p-8 hover:shadow-lg sm:hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm sm:text-2xl font-bold flex-shrink-0">
                  FH
                </div>
                <div>
                  <h3 className="text-sm sm:text-xl font-bold text-gray-800">
                    BBQ Zone Team
                  </h3>
                  <p className="text-orange-500 font-semibold text-xs sm:text-sm">
                    Full Team
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-xs sm:text-base">
                Dedicated team working 24/7 to ensure you get the best food
                delivery experience with excellent customer service.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg sm:rounded-2xl py-6 sm:py-12 px-3 sm:px-8 text-white">
          <h2 className="text-lg sm:text-3xl font-bold mb-2 sm:mb-4">
            Ready to Order?
          </h2>
          <p className="text-xs sm:text-base lg:text-lg mb-3 sm:mb-6 text-orange-100">
            Discover thousands of restaurants and get your favorite food
            delivered to your door
          </p>
          <button
            className="bg-white cursor-pointer text-orange-500 font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-xs sm:text-lg shadow-lg w-full sm:w-auto"
            onClick={() => navigate("/")}
          >
            Browse Restaurants
          </button>
        </div>
      </div>

      {/* <h1>About us</h1>
      <h2>This is About us page</h2>
      <UserFunctionalComponent name={"Anik Bera (Function)"} />
      <UserClassComponent name={"Anik Bera (Class)"} location={"Kolkata"} /> */}
    </div>
  );
};

export default About;
