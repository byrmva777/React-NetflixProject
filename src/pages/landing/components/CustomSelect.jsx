import React from "react";

const CustomSelect = ({ selectedOption, setSelectedOption, options }) => {
  return (
    <div className="relative w-auto min-w-[150px] max-w-[250px]">
      <select
        value={selectedOption.value}
        onChange={(e) => setSelectedOption(options.find(option => option.value === e.target.value))}
        className="w-full bg-gray-800 text-white py-2 px-4 rounded-md appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    
      <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none text-white">
        ▼
      </div>
    </div>
  );
};

export default CustomSelect;