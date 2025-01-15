import React from 'react'
import FooterItem from './FooterItem'
import Logo from './Logo'
import { useState,useEffect } from 'react'
import CustomSelect from './CustomSelect'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

function Footer({HasEmailInput}) {
    const navigate = useNavigate()
    const languages = [
        { title: "English", value: "en" },
        { title: "Russian", value: "ru" },
    ];
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState("en");

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage);
    }, [selectedLanguage]);
    const items = [
        [
            <a href="">{t("footer.links.0")}</a>,
            <a href="">{t("footer.links.1")}</a>,
            <a href="">{t("footer.links.2")}</a>,
            <a href="">{t("footer.links.3")}</a>,
            <a href="">{t("footer.links.4")}</a>
        ],
        [
            <a href="">{t("footer.links.5")}</a>,
            <a href="">{t("footer.links.6")}</a>,
            <a href="">{t("footer.links.7")}</a>,
            <a href="">{t("footer.links.8")}</a>,
            <a href="">{t("footer.links.9")}</a>
        ],
        [
            <a href="">{t("footer.links.10")}</a>,
            <a href="">{t("footer.links.11")}</a>,
            <a href="">{t("footer.links.12")}</a>,
            <a href="">{t("footer.links.13")}</a>,
            <a href="">{t("footer.links.14")}</a>
        ],
        [
            <a href="">{t("footer.links.15")}</a>,
            <a href="">{t("footer.links.16")}</a>,
            <a href="">{t("footer.links.17")}</a>,
            <a href="">{t("footer.links.18")}</a>,
            <a href="">{t("footer.links.19")}</a>
        ]
    ]

    return (
         <div className='bg-[#000000]  h-[600px] pt-[40px] px-[150px]  pd-8'>
            {HasEmailInput&&(<p className='text-[#FFFFFFB2] text-center'>{t('footer.readyToWatch')}</p>)}
            {HasEmailInput&& 
            (<div className='w-[800px] h-[56px] mt-[16px] text-center flex  justify-center items-center relative pl-[120px] mb-12'>
                <div className='w-[700px]  h-[56px] '>
                    <input className='w-full h-full bg-[#161616B2] border border-r-gray-400 rounded' type="text" />
                </div>
                <button className='relative pr-[40px] text-white font-medium font-roboto text-2xl h-full bg-[#E50914] rounded hover:bg-[#B10810] duration-75 ease-out ml-[10px] w-[220px]' onClick={()=>{
                    navigate('/signup')
                }}>{t('getStarted')}</button>
                <span className='inline-block absolute right-5 top-4 ml-[20px] px-[5px]'><svg className='w-[14px] ml-[20px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg></span>
            </div>)}
            <a href="" className='text-[#FFFFFFB2] underline'>Questions? Contact us.</a>
            <FooterItem items={items} />

            <div className='h-[30px]'>
                <CustomSelect options={languages} selectedOption={selectedLanguage} setSelectedOption={setSelectedLanguage} logo={<Logo />} />
            </div>
            <p className='mt-8 text-[#FFFFFFB2]'>Netlix Azerbaijan</p>

        </div>
    )
}

export default Footer