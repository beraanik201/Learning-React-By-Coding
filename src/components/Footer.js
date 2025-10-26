const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-4 mt-8 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-center md:text-left">
        <p className="text-sm">
          © {new Date().getFullYear()} Food App. All rights reserved.
        </p>

        <ul className="flex gap-4 mt-2 md:mt-0 text-sm">
          <li className="hover:text-orange-500 cursor-pointer transition-all duration-200">
            Privacy Policy
          </li>
          <li className="hover:text-orange-500 cursor-pointer transition-all duration-200">
            Terms of Service
          </li>
          <li className="hover:text-orange-500 cursor-pointer transition-all duration-200">
            Contact
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
