
import React, { useState } from 'react'
import Form from "common/Form"
// import { div } from 'framer-motion/client'
import Footer from '../landing/components/Footer'
import { useStore } from "zustand"
import Store from '../common/Store'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const { addAccessToken } = useStore(Store)
    const [formData, setFormData] = useState({})
    const nav = useNavigate()
    const formInputs = [
        {
            name: "email",
            label: "",
            type: "email",
            placeholder: "Email",
            inputStyle: "p-4 bg-transparent border-[1px] text-white border-zinc-400"
        },
        {
            name: "password",
            label: "",
            type: "password",
            placeholder: "Password",
            inputStyle: "p-4 bg-transparent border-[1px] text-white border-zinc-400"
        },
    ]
    const formButtons = [
        {
            title: "Login",
            style: "bg-[#E50914] text-white font-semibold text-base py-[12px] rounded-md",
            action: () => {
                login()
            }
        },
        {
            title: (
                <>
                    <span className="text-[#FFFFFFB2] ml-9">New to Netflix?</span>{' '}
                    <span className="text-white font-semibold ">Sign up now</span>
                </>
            ),
            style: "flex  items-center gap-1",
            action: () => { nav("/signup") }
        }
    ]
    const login = async () => {
        try {
            const response = await fetch("http://localhost:5001/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            if (response.ok) {
                addAccessToken(data.token)
                nav('/home')
                toast.success(' Succesfully login!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "black",
                    });
            }
            else{
                toast.error(data?.message || "An error occurred. Please try again.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "black",
                });
            }
        } catch (error) {
            console.error(error)
        }
       
    }

    return (
        <>
            <div className="w-full h-screen bg-[url('/images/bg-image.png')] bg-black/50 bg-blend-overlay bg-cover bg-center bg-no-repeat no-scrollbar relative overflow-hidden">
                <img
                    src="/images/Group.png"
                    alt=""
                    className=" absolute ml-[150px] top-5 transform cursor-pointer"
                    onClick={()=>{
                        nav('/')
                    }
                    }
                />
                <div className="flex items-center justify-center h-full">
                    <Form
                        text="Sign In"
                        containerStyle="bg-[#000000B2] h-[400px] p-10 rounded-md px-[60px] py-[40px]"
                        formStyle="w-[280px] flex flex-col gap-5"
                        setFormData={setFormData}
                        formInputs={formInputs}
                        formButtons={formButtons}
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}
