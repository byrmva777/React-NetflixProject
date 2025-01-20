import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomeNavBar({ selectedTab, setSelectedTab, navbarItems }) {
  const navigate = useNavigate()

  return (
    <div className='absolute pl-[85px] z-10 w-screen py-[32px] flex overflow-hidden'>
      <img 
        src="/images/Group.png" 
        alt=""  
        onClick={() => {
          navigate('/')
        }} 
        className='h-[30px] mr-[150px] cursor-pointer' 
      />
      <div className='flex text-white gap-8'>
        {
          navbarItems.map((item) => 
            <button 
              key={item.value}  
              onClick={() => {
                setSelectedTab(item)
              }} 
              className={`text-white text-2xl ${item.value === selectedTab.value && "font-bold"}`}
            >
              {item.title}
            </button>
          )
        }
      </div>
    </div>
  )
}

export default HomeNavBar
