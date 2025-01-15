const EmailInput = () => {

  return (
    <div className="flex items-center h-[55px] w-[590px] mx-auto mt-6 gap-2">
        <input className=' w-full bg-transparent border-[1px] border-zinc-400 h-full px-4 rounded-[4px]' type="text" placeholder='Enter address' />
        <button className="min-w-[210px] justify-center flex items-center bg-[rgb(229,9,20)] hover:bg-[#ce272ffb] text-white font-semibold text-2xl py-3 px-4 pr-8 gap-4 rounded-[4px]">Get Started
        <svg className="w-[13px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
        </button>
    </div>
  )
}

export default EmailInput 