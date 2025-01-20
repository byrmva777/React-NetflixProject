import { useNavigate } from 'react-router-dom';

// İçində 'id' və 'type' əlavə ediləcək
const Home = ({ backgroundImage, trendingMovies }) => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    const movie = trendingMovies[0];  // İlk filmə baxırıq, amma siz özəlləşdirə bilərsiniz.
    navigate('/details', { 
      state: { id: movie.id, type: 'movie' }  // 'movie' və ya 'tv' istifadə edilə bilər.
    });
  };

  return (
    <div className="w-full h-screen bg-image bg-black/50 bg-blend-overlay bg-cover bg-center bg-no-repeat no-scrollbar relative">
      {backgroundImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.4 } }}
        >
          <div className="w-[450px] absolute left-20 top-40">
            <img src="/images/series.png" className="h-[40px] mb-1" alt="" />
            {trendingMovies?.length > 0 && (
              <>
                <h1 className="text-white text-bold text-8xl mb-5 ml-3">
                  {trendingMovies[0]?.title}
                </h1>
                <div className="flex mb-[20px]">
                  <img src="/images/Top10.png" alt="" className="size-[30px]" />
                  <h3 className="font-medium text-white text-2xl">
                    #1 in TV Shows Today
                  </h3>
                </div>
                <p className="text-white mb-[20px] font-normal">
                  {trendingMovies[0]?.overview.substring(0, 180)}. . .
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={handlePlayClick}  // Bu funksiyanı əlavə etdik
                    className="font-bold rounded font-4xl px-3 py-1 flex items-center justify-center bg-white transition-all duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-105"
                  >
                    <img
                      src="/images/Polygon 1.png"
                      className="size-[16px] mr-2"
                      alt=""
                    />
                    Play
                  </button>
                  <button className="text-white font-semibold rounded font-3xl px-3 py-1 flex items-center justify-center bg-[#515451] transition-all duration-300 ease-in-out transform hover:bg-gray-600 hover:scale-105">
                    <img
                      src="/images/Info btn.png"
                      alt=""
                      className="w-[16px] mr-3"
                    />
                    More info
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
