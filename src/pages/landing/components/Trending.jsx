import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import CustomSelect from "./CustomSelect";

const Trending = ({ setItem }) => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("movie");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = [
    { title: "Movie", value: "movie" },
    { title: "TV", value: "tv" },
  ];

  const getData = async () => {
    setLoading(true); 
    setError(null); 
    try {
      const response = await fetch(
        `http://localhost:5001/api/v1/${selectedOption}/trending`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result = await response.json();
      setData(result.content || []); 
    } catch (error) 
    {
      setError(error.message);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    getData();
  }, [selectedOption]);

  return (
    <div className="w-full py-10 relative">
      <div className="flex justify-between items-center px-8">
        <h3 className="text-white text-2xl font-semibold">Trending Now</h3>
        <CustomSelect
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
        />
      </div>

      {/* Məlumatın Yüklənmə, Xəta və Məlumat Göstərilmə Bölməsi */}
      <div className="w-full flex gap-4 overflow-x-scroll py-5 pl-8 scrollbar-hidden">
        {loading && (
          <div className="text-white text-center w-full">Loading...</div>
        )}
        {error && (
          <div className="text-red-500 text-center w-full">{error}</div>
        )}
        {!loading && !error && data.length === 0 && (
          <div className="text-white text-center w-full">
            No trending items found.
          </div>
        )}
        {!loading &&
          !error &&
          data.map((item, index) => (
            <MovieCard
              key={item.id}
              setItem={setItem}
              item={item}
              index={index}
            />
          ))}
      </div>
    </div>
  );
};

export default Trending;