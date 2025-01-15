const CustomSelect = ({selectedOption,setSelectedOption,options,logo}) => {
   
  return (
    <div className={`border-[1px] border-zinc-400 focus:outline-white relative bg-zinc-800 w-[135px] ${logo ? "h-full w-[135px]" : "h-[33px] w-[110px]"}  rounded-[4px]`}>
     {logo && logo}
        <select onChange={(e) => {
            setSelectedOption(e.target.value)
        }} className='w-full h-full opacity-0 hover:cursor-pointer'>
      
            {options?.map(item => (<option key={item.value} value={item.value}>{item.title}</option>))}

        </select>
        <p className={`absolute top-1 ${logo ? "left-10" : "left-2"} text-white pointer-events-none`}> {selectedOption.title} </p>
        <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-3 right-3 w-[10px] pointer-events-none' viewBox="0 0 512 512"><path fill="#ffffff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
    </div>

  )
}
export default CustomSelect