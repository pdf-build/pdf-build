import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">Free Online PDF Tools</h1>
      <p className="text-gray-600 mb-10">
        Convert images to PDF instantly. No signup. No watermark.
      </p>

      <Link
        to="/jpg-to-pdf"
        className="inline-block bg-black text-white px-8 py-3 rounded"
      >
        JPG to PDF
      </Link>
    </div>
  );
};

export default Home;