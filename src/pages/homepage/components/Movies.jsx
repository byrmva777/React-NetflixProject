import React, { useState, useEffect } from "react";
import HomeNavBar from "./components/HomeNavBar.jsx";
import { Link } from "react-router-dom";
import { useStore } from "zustand";
import themeStore from "../../common/Store";

const Homepage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingShows, setTrendingShows] = useState([]);
  const { token } = useStore(themeStore);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [selectedTab, setSelectedTab] = useState({ title: "Ana Səhifə", value: "home" });

  // **Navbar Menyusu**
  const navbarItems = [
    { title: "Ana Səhifə", value: "home" },
    { title: "Filmlər", value: "movie" },
    { title: "TV Şoular", value: "tv" },
  ];

  const getTrendingMovies = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/v1/movie/trending");
      const data = await response.json();
      if (response.ok) {
        setTrendingMovies(data.content);
      } else {
        console.error("Failed to load the movies:", data);
      }
    } catch (error) {
      console.error("An error occurred while loading the movies.:", error);
    }
  };

  
  const getTrendingShows = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/v1/tv/trending");
      const data = await response.json();
      if (response.ok) {
        setBackgroundImage("https://image.tmdb.org/t/p/original/2meX1nMdScFOoV4370rqHWKmXhY.jpg");
        setTrendingShows(data.content);
      } else {
        console.error("TV şouları yükləmək alınmadı:", data);
      }
    } catch (error) {
      console.error("TV şouları yükləmə zamanı xəta baş verdi:", error);
    }
  };

  useEffect(() => {
    getTrendingMovies();
    getTrendingShows();
  }, []);

  const visibleContent = () => {
    switch (selectedTab.value) {
      case "movie":
        return (
          <div>
            {trendingMovies.map((movie) => (
              <div key={movie.id} className="movie-item">
                <h2>{movie.title}</h2>
              </div>
            ))}
          </div>
        );
      case "tv":
        return (
          <div>
            {trendingShows.map((show) => (
              <div key={show.id} className="show-item">
                <h2>{show.name}</h2>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div>
            <h1 className="text-4xl font-bold">Devil in Ohio</h1>
            <p className="mt-4 max-w-md">
              Gənc bir xəstə sirli bir sektadan qaçır. Psixiatr onu qorumaq üçün evinə aparır, lakin bu hərəkət ailəsini təhlükəyə atır.
            </p>
            <div className="mt-6">
              <Link to="/details/movie/402431">
                <button className="bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
                  <i className="fas fa-play mr-2"></i> Oynat
                </button>
              </Link>
              <button className="border border-black bg-gray-600 text-white px-6 mx-3 py-3 rounded-lg text-lg font-semibold transition duration-300">
                <i className="fas fa-info-circle mr-2"></i> Daha çox məlumat
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute top-0 left-0 w-full z-10">
        <HomeNavBar navbarItems={navbarItems} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>

      <div
        className={`absolute left-8 text-white z-20 transition-all duration-500 ${selectedTab.value !== "home" ? "top-32" : "top-1/3"}`}
      >
        {visibleContent()}
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
};

export default Homepage;
