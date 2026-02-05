const MAX_IMAGES = 10;
const MAX_TOTAL_SIZE = 20 * 1024 * 1024; // 20 MB

const FileDropzone = ({ onFilesSelect, setError }) => {
  const handleFiles = (files) => {
    if (files.length > MAX_IMAGES) {
      setError(`You can upload up to ${MAX_IMAGES} images only.`);
      return;
    }

    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > MAX_TOTAL_SIZE) {
      setError("Total file size must be under 20 MB.");
      return;
    }

    setError("");
    onFilesSelect(files);
  };

  return (
    <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
      <p className="text-gray-600">Click or drag images here</p>
      <p className="text-xs text-gray-400 mt-1">
        Max 10 images · Max 20MB
      </p>

      <input
        type="file"
        accept="image/jpeg,image/png"
        multiple
        className="hidden"
        onChange={(e) => handleFiles(Array.from(e.target.files))}
      />
    </label>
  );
};

export default FileDropzone;