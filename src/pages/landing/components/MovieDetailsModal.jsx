import React from "react";

const MovieDetailsModal = ({ movieDetails, onClose }) => {
  if (!movieDetails) return null;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
 
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div
        className="bg-black text-white w-full md:w-10/12 lg:w-8/12 xl:w-6/12 max-w-4xl p-6 rounded-lg relative shadow-lg overflow-hidden"
        style={{ height: "80vh", maxWidth: "1000px" }}
      >
        <button
          className="absolute top-2 right-2 text-white text-xl focus:outline-none hover:text-gray-400 z-50"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="relative flex flex-col md:flex-row">
          <div className="relative mb-4 md:mb-0 md:w-1/3 w-full">
            <img
              src={
                movieDetails.content.poster_path
                  ? `${imageBaseUrl}${movieDetails.content.poster_path}`
                  : "/placeholder.jpg"
              }
              alt={movieDetails.content.title || movieDetails.content.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
          </div>

          <div className="pl-4 md:w-2/3 w-full">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
              {movieDetails.content.title || movieDetails.content.name}
            </h2>

            <p className="text-sm md:text-base mb-4">{movieDetails.content.overview}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {movieDetails.content.release_date && (
                <span className="px-2 py-1 bg-gray-800 rounded-md text-xs md:text-sm">
                  {movieDetails.content.release_date}
                </span>
              )}
              {movieDetails.content.vote_average && (
                <span className="px-2 py-1 bg-gray-800 rounded-md text-xs md:text-sm">
                  {movieDetails.content.vote_average}/10
                </span>
              )}
              {movieDetails.content.genres && (
                <span className="px-2 py-1 bg-gray-800 rounded-md text-xs md:text-sm">
                  {movieDetails.content.genres.map((genre) => genre.name).join(", ")}
                </span>
              )}
            </div>

            <div className="text-left">
              <button
                className="px-4 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-all"
                onClick={() => alert('Get Started clicked!')} 
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
