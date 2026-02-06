import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg">
          PDF Tools
        </Link>

        <div className="flex gap-6 text-sm font-medium text-gray-700">
          <Link to="/jpg-to-pdf" className="hover:text-black">
            JPG to PDF
          </Link>
          <Link to="/merge-pdf" className="hover:text-black">
            Merge PDF
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
