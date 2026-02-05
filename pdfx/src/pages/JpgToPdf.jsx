import { useState } from "react";
import { useSeo } from "../hooks/useSeo";
import FileDropzone from "../components/common/FileDropzone";
import ImagePreview from "../components/jpgToPdf/ImagePreview";
import PageSizeSelector from "../components/jpgToPdf/PageSizeSelector";
import ConvertButton from "../components/jpgToPdf/ConvertButton";
import { convertImagesToPdf } from "../utils/pdf/jpgToPdf";


const JpgToPdf = () => {
    useSeo({
  title: "JPG to PDF Converter – Free, Online & No Watermark",
  description:
    "Convert JPG and PNG images to PDF online for free. No watermark, no signup, and works directly in your browser.",
  canonical: "https://yourdomain.com/jpg-to-pdf",
});
  const [images, setImages] = useState([]);
  const [pageSize, setPageSize] = useState("a4");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleConvert = async () => {
    if (!images.length) return;

    try {
      setIsLoading(true);
      await convertImagesToPdf(images, pageSize);
    } catch (err) {
      setError("Something went wrong while converting.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">JPG / PNG to PDF</h1>
      <p className="text-gray-600 mb-8">
        Convert images to a single PDF directly in your browser.
      </p>

      <FileDropzone
        onFilesSelect={setImages}
        setError={setError}
      />

      {error && (
        <p className="mt-4 text-sm text-red-600">
          {error}
        </p>
      )}

      {images.length > 0 && (
        <>
          <ImagePreview images={images} setImages={setImages} />
          <PageSizeSelector value={pageSize} onChange={setPageSize} />
          <ConvertButton
            onClick={handleConvert}
            isLoading={isLoading}
          />
        </>
      )}

      {/* SEO CONTENT */}
<div className="mt-16 text-gray-700 space-y-8 leading-relaxed">

  <section>
    <h2 className="text-2xl font-semibold mb-3">
      JPG to PDF Converter – Free & Online
    </h2>
    <p>
      Convert JPG and PNG images to PDF instantly using our free online JPG to
      PDF converter. This tool works directly in your browser, which means your
      images are never uploaded to any server. It is fast, secure, and works on
      mobile, tablet, and desktop devices.
    </p>
    <p className="mt-3">
      Whether you are submitting exam forms, uploading documents, or combining
      multiple images into a single PDF file, this tool ensures high quality
      output without distortion or watermark.
    </p>
  </section>

  <section>
    <h3 className="text-xl font-semibold mb-3">How to convert JPG to PDF</h3>
    <ol className="list-decimal ml-6 space-y-2">
      <li>Select or drag and drop JPG or PNG images.</li>
      <li>Reorder images by dragging them into the correct sequence.</li>
      <li>Click the “Convert to PDF” button.</li>
      <li>Download your PDF instantly.</li>
    </ol>
  </section>

  <section>
    <h3 className="text-xl font-semibold mb-3">Why use this JPG to PDF tool?</h3>
    <ul className="list-disc ml-6 space-y-2">
      <li>No watermark added to the PDF</li>
      <li>No sign-up or login required</li>
      <li>Images are processed locally in your browser</li>
      <li>Perfect for exam forms and assignments</li>
      <li>Works smoothly on mobile phones</li>
    </ul>
  </section>

  <section>
    <h3 className="text-xl font-semibold mb-3">Common use cases</h3>
    <p>
      This JPG to PDF converter is commonly used for uploading documents to
      government portals, college assignments, job applications, and online
      forms that require PDF format. It is especially useful when you need to
      combine multiple images into a single PDF file.
    </p>
  </section>

  <section>
    <h3 className="text-xl font-semibold mb-3">FAQs</h3>

    <div className="space-y-4">
      <div>
        <h4 className="font-semibold">Is this JPG to PDF converter free?</h4>
        <p>
          Yes, this tool is completely free to use and does not add any
          watermark to your PDF files.
        </p>
      </div>

      <div>
        <h4 className="font-semibold">Are my files uploaded to a server?</h4>
        <p>
          No. All image processing happens inside your browser. Your files never
          leave your device.
        </p>
      </div>

      <div>
        <h4 className="font-semibold">Can I use this on my mobile phone?</h4>
        <p>
          Yes, the JPG to PDF converter works on Android, iPhone, and all modern
          mobile browsers.
        </p>
      </div>

      <div>
        <h4 className="font-semibold">Will the image quality reduce?</h4>
        <p>
          The tool optimizes images to maintain clarity while keeping the PDF
          size reasonable. There is no visible distortion.
        </p>
      </div>

      <div>
        <h4 className="font-semibold">
          Can I upload multiple images and reorder them?
        </h4>
        <p>
          Yes, you can upload multiple images and drag them to rearrange the
          order before converting to PDF.
        </p>
      </div>
    </div>
  </section>

</div>

      
    </div>
  );
};

export default JpgToPdf;