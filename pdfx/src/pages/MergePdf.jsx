import { useState } from "react";
import { mergePdfs } from "../utils/pdf/mergePdf";
import FileDropzone from "../components/common/FileDropzone";
import PdfPreview from "../components/mergePdf/PdfPreview";

import ConvertButton from "../components/jpgToPdf/ConvertButton";
import { useSeo } from "../hooks/useSeo";

const MergePdf = () => {
  useSeo({
    title: "Merge PDF Online – Free & No Watermark",
    description:
      "Merge multiple PDF files into one online for free. No upload, no watermark, and works directly in your browser.",
    canonical: "https://yourdomain.com/merge-pdf",
  });

  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleMerge = async () => {
    if (files.length < 2) {
      setError("Please select at least two PDF files.");
      return;
    }

    try {
      setIsLoading(true);
      setError("");
      await mergePdfs(files);
    } catch {
      setError("Failed to merge PDFs.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Merge PDF</h1>
      <p className="text-gray-600 mb-8">
        Combine multiple PDF files into a single PDF in seconds.
      </p>

      <FileDropzone
        onFilesSelect={(f) =>
          setFiles(f.filter((file) => file.type === "application/pdf"))
        }
        setError={setError}
      />

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {files.length > 0 && (
        <>
          {/* Reuse drag & reorder UI */}
          <PdfPreview files={files} setFiles={setFiles} />

          <ConvertButton onClick={handleMerge} isLoading={isLoading} />
        </>
      )}
    </div>
  );
};

export default MergePdf;
