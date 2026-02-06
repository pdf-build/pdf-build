import { Link } from "react-router-dom";
import { useSeo } from "../hooks/useSeo";

const Home = () => {
  useSeo({
    title: "Free Online PDF Tools – JPG to PDF, Merge & Compress",
    description:
      "Free online PDF tools to convert JPG to PDF, merge PDFs, and compress files. No watermark, no signup.",
    canonical: "https://yourdomain.com",
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">
        Free Online PDF Tools
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Link
          to="/jpg-to-pdf"
          className="border rounded-lg p-6 hover:shadow transition"
        >
          <h2 className="text-xl font-semibold mb-2">JPG to PDF</h2>
          <p className="text-gray-600">Convert images to PDF instantly.</p>
        </Link>

        <Link
          to="/merge-pdf"
          className="border rounded-lg p-6 hover:shadow transition"
        >
          <h2 className="text-xl font-semibold mb-2">Merge PDF</h2>
          <p className="text-gray-600">Combine multiple PDFs into one.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
