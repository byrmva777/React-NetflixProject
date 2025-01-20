import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useStore } from 'zustand'
import themeStore from '../../common/Store'
import Similiar from './components/Similar'

const Details = () => {
    const { accessToken } = useStore(themeStore)
    const location = useLocation()
    const { id, type } = location.state || {}
    const [detailsData, setDetailsData] = useState({})
    const [trailersData, setTrailersData] = useState({})
    const [loading, setLoading] = useState([])

    const getDetails = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/${type}/${id}/details`, {
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                }
            })
            const data = await response.json()
            if (response.ok) {
                setDetailsData(data.content)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(prevState => [...prevState, false])
        }
    }

    const getTrailers = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/${type}/${id}/trailers`, {
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                }
            })
            const data = await response.json()
            if (response.ok) {
                setTrailersData(data.trailers)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(prevState => [...prevState, false])
        }
    }

    useEffect(() => {
        setLoading([]); 
        getDetails()
        getTrailers()
    }, [id, type]) 

    return (
        loading.length !== 2 ? (
            <div className='flex justify-center items-center pb-10px h-screen w-screen'>Loading...</div>
        ) : (
            <div className='bg-black'>
                <iframe
                    className='w-[700px] h-[350px] mx-auto'
                    src={`https://www.youtube.com/embed/${trailersData[0]?.key}`}
                    frameBorder="0"
                ></iframe>
                <div className='p-10'>
                    <div className='flex gap-10 mb-5'>
                        <h1 className='text-4xl mb-2 text-white'>
                            {detailsData.name || detailsData.title}
                        </h1>
                        <div className='flex gap-3 items-center'>
                            {detailsData?.genres?.map(item => (
                                <div key={item.id} className='bg-zinc-700 w-fit px-3 py-2 text-white rounded-[4px]'>
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className='text-white'>{detailsData.overview}</p>
                </div>
                <Similiar id={id} type={type} />
            </div>
        )
    )
}

export default Details;