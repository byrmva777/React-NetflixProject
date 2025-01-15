import React from 'react'
import { useState, useEffect } from 'react'
import Store from '../common/Store'
import { useStore } from 'zustand'
import "../App.css";
import Navbar from './components/Navbar';
// import Home from './components/Home';
// import { div } from 'framer-motion/client';
// import Movie from './components/Movie';
// import TV from './components/TV';

export default function Homepage() {
    const [trendingMovies, SetTrendingMovies] = useState([])
    const [trendingShows, SetTrendingShows] = useState([])
    const { token } = useStore(Store)
    const [backgroundImage, SetBackGroundImage] = useState(null)
    const [selectedTab, setSelectedTab] = useState({title : "Home",value :"home"})
    const navbarItems = [{title : "Home",value : "home"},{title : "Movies",value : "movie"},{title : "TV Shows",value : "tv"}]
    const GetTrendingMovies = async () => {
        try {
            const response = await fetch("http://localhost:5001/api/v1/movie/trending")
            const data = await response.json()
            if (response.ok) {
                SetTrendingMovies(data.content)
            }
        } catch (error) {
            console.error(error)
        }
    }
    const GetTrendingShows = async () => {
        try {
            const response = await fetch("http://localhost:5001/api/v1/tv/trending")
            const data = await response.json()
            if (response.ok) {
              
                SetBackGroundImage("https://image.tmdb.org/t/p/original/2meX1nMdScFOoV4370rqHWKmXhY.jpg");

            }
        } catch (error) {
            console.error(error)
        }
    }

    const visibleContent = () => {
        switch (selectedTab.value) {
            case "movie":
                return <Movie data = {trendingMovies}/>
            case "tv":
                return <TV data= {trendingShows}/>
            default:
                return <Home trendingMovies={trendingMovies} backgroundImage={backgroundImage}/>
        }
    }
    useEffect(() => {
        GetTrendingMovies()
        GetTrendingShows()
    }, [])
    return (
        <>
            <Navbar navbarItems = {navbarItems} selectedTab = {selectedTab} setSelectedTab = {setSelectedTab} />
            {visibleContent()}
        </>
    )
}