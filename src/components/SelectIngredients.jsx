// SelectIngredients.jsx
const SelectIngredients = ({ label, options, onChange }) => {
  // Güvenlik kontrolü: options bir dizi değilse boş bir dizi olarak ayarla
  const validOptions = Array.isArray(options) ? options : [];

  return (
    <div className="relative text-center">
      <label
        htmlFor={label.toLowerCase()}
        className="block font-medium text-gray-700"
      >
        {label}
      </label>
      <select
        id={label.toLowerCase()}
        multiple
        className="w-full h-20 p-2 border border-gray-300 rounded-md"
        onChange={(e) => onChange(e, label)}
      >
        {validOptions.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectIngredients;
