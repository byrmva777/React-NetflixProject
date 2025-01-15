import React from 'react'
import Navbar from '../../homepage/components/Navbar'
import EmailInput from './EmailInput'

const Entry = () => {
  return (
    <div className='w-full h-screen px-[8rem] bg-cover bg-no-repeat bg-center bg-[url("https://s3-alpha-sig.figma.com/img/2c2b/0546/a0776863a9ed663e9b1617f624918050?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QIeTNJuGnvT9LRGC~~QVpQ~rJr3AsFbz6Qh6ScECI7-sdeq6hJvz09UUC8q~9B5sgDep-eyP9Frg2F1NmDXIOe3bdBnjx3UAd18f0v6hzx04IyF-GUokSNUz-HVvEdDfm04aCpnrkwb8Z2jTR7bBvhj~R81aBJtWBeXS--0WG4zj7GTMoA41ZqhuAi1v-lzSAT1Ofj~B9oBJcgnMdn06QpiMNzVxNKAoYYSUa9i7m85lO5STjLFR1AMl2e-le7nwR444hsnrTfZ2w28HjKLMAfyDYi0ZfpqMYOYR6aGzDP6-m0NoZ4iepNP1c0V-D5LQM4ldfMhN0Ily8eMPaKnlbA__")] bg-black/75 bg-blend-overlay'>
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