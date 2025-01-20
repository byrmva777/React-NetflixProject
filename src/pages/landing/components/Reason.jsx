
import React from 'react';

const Reason = ({ item }) => {
    return (     
        <div className='w-[260px] h-82 min-h-[268px] text-white gap-4 rounded-[16px] relative bg-gradient-to-br from-[#192247]  to-[#210E17] p-6 flex flex-col items-end justify-between mb-6'>
            <div className='flex flex-col items-center flex-grow'>
                <h3 className='font-bold text-[24px] mb-[12px] text-white text-center'>{item.title}</h3>
                <p className='font-medium text-[16px] text-gray-300 text-center'>{item.desc}</p>
            </div>
            <div className='flex flex-row items-end'>
                <img className='w-[72px] h-[72px] mt-4' src={item.img} alt="" />
            </div>
        </div>
    );
};

export default Reason