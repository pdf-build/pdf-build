const PageSizeSelector = ({ value, onChange }) => {
  return (
    <div className="mt-6">
      <label className="block text-sm font-medium mb-2">Page Size</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded px-3 py-2"
      >
        <option value="a4">A4</option>
        <option value="letter">Letter</option>
      </select>
    </div>
  );
};

export default PageSizeSelector;