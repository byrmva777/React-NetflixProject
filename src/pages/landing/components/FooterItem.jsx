import React from 'react';
import { useTranslation } from 'react-i18next';

function FooterItem({ items }) {
    const { t, i18n } = useTranslation();

    return (
        <div className='flex gap-3 justify-between flex-row pt-[40px] pb-[40px] text-[#FFFFFFB2] underline '>
            {
                items.map((item, index) => (
                    
                    <div key={index} className='flex flex-col gap-2 font-normal font-roboto text-base'>
                        {item}
                    </div>
                ))
            }
        </div>
    );
}

export default FooterItem;
