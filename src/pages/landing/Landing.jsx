import React, { useState, useEffect } from 'react';
import Entry from './components/Entry'; 
import Footer from './components/Footer';
import Trending from './components/Trending';
import Arch from './components/Arch';
import GenreItems from './components/GenreItems';
import FAQ from './components/FAQ';
import ReasonsToJoin from './components/ReasonsToJoin';

function Landing() {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState({});
  const [item, setItem] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/v1/${item?.media_type}/${item?.id}/details`);
      const data = await response.json();
      setData(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (item) {
      setModalOpen(true);
      getData();
    }
  }, [item]);

  return (
    <div className={`no-scrollbar w-full relative ${modalOpen ? "h-screen overflow-hidden" : ""}`}>
      <Entry />
      <Arch />
      <Trending setModalOpen={setModalOpen} setItem={setItem} />
      
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          className="w-full h-screen absolute top-0 left-0 bg-black/60 flex justify-center items-center rounded-lg"
        >
          <div
            className="relative max-w-[90%] max-h-[90%] rounded-lg bg-zinc-900 overflow-y-scroll"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 text-white"
              onClick={() => setModalOpen(false)}
              aria-label="Close Modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative">
              <div className='absolute w-full h-full bg-gradient-to-tr from-zinc-900 from-25% via-transparent via-55% flex items-end'>
                <h1 className='text-white text-4xl md:text-5xl font-bold my-4 ml-5'>{data?.title}</h1>
              </div>
             
              <img className='' src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`} alt={data?.title} />
            </div>

            <div className='px-6 relative'>
              <div>
                <GenreItems genres={data?.genres} />
              </div>
              <p className='text-white my-4'>{item?.overview}</p>
              <button className='relative pr-[40px] text-white font-roboto text-lg md:text-xl bg-[#E50914] rounded hover:bg-[#B10810] duration-75 ease-out h-[50px] w-[150px]'>
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
      <ReasonsToJoin />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Landing;
