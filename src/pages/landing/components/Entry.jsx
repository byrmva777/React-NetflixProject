import React from 'react'
import Navbar from '../../homepage/components/Navbar'
import EmailInput from './EmailInput'

const Entry = () => {
  return (
    <div className='w-full h-screen px-[5rem] bg-cover bg-no-repeat bg-center bg-[url("C:\Users\user\Desktop\JavaScriptFiles\netflixProject\src\assets\NetFlixBG.jpg")] bg-black/75 bg-blend-overlay'>
      <Navbar/>
        <div className='w-[660px] h-fit mx-auto pt-[130px]'>
            <h1 className='font-bold text-[56px] text-white leading-[73px] text-center'>
            Unlimited movies, TV shows, and more
            </h1>
            <p className='text-white font-semibold text-[23px] text-center mt-5 '>Starts at EUR 7.99. Cancel anytime.</p>
            <p className='text-white font-regular text-[19px] text-center mt-7 '>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        <EmailInput/>
    </div>
  )
}

export default Entry