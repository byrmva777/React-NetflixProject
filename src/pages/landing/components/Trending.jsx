import React, { useEffect, useState, useRef } from "react";
import MovieCard from "./MovieCard";
import CustomSelect from "./CustomSelect";
import MovieDetailsModal from "./MovieDetailsModal"; 

const Trending = ({ setItem }) => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("movie");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null); 

  const scrollContainerRef = useRef(null); 

  const options = [
    { title: "Movies – English", value: "movie" },
    { title: "TV – English", value: "tv" },
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
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [selectedOption]);

  
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  
  const handleCardClick = async (movieId) => {
    try {
      const endpoint = selectedOption === "movie"
        ? `http://localhost:5001/api/v1/movie/${movieId}/details`
        : `http://localhost:5001/api/v1/tv/${movieId}/details`;

      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Error fetching movie details`);
      }
      const data = await response.json();
      setSelectedMovie(data); 
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  return (
    <div className="w-full py-10 relative bg-black">
      <div className="flex flex-col px-8 gap-4">
        <h3 className="text-white text-2xl font-semibold">Trending Now</h3>
        <div className="max-w-[200px]">
          <CustomSelect
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            options={options}
          />
        </div>
      </div>

      <div className="relative mt-6">
      
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-800 z-10"
        >
          {"<"}
        </button>

        <div
          ref={scrollContainerRef}
          className="w-full flex gap-4 overflow-hidden py-5 px-8"
        >
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
                onCardClick={handleCardClick}
              />
            ))}
        </div>

      
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-800 z-10"
        >
          {">"}
        </button>
      </div>

     
      {selectedMovie && (
        <MovieDetailsModal
          movieDetails={selectedMovie}
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
};

export default Trending;
