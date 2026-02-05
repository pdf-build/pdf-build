const ConvertButton = ({ onClick, isLoading }) => {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className={`mt-8 w-full py-3 rounded text-white transition
        ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800"}
      `}
    >
      {isLoading ? "Converting..." : "Convert to PDF"}
    </button>
  );
};

export default ConvertButton;