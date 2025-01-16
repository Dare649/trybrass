'use client'

import { useState } from "react";
import Image from "next/image";
import login from '@/public/images/login.jpeg';
import { GoEye, GoEyeClosed } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

const Login = () => {
    const [password, setPassword] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
 
    const handlePassword = () => {
        setPassword((prev) => !prev);
    }
  return (
    <div className='w-full h-screen top-0'>
        <div className='w-full h-full flex flex-row'>
            <Image
                src={login}
                alt="trybrass"
                width={500} // Use a higher resolution width
                height={500} // Match the height proportionally
                quality={100} // Set quality to maximum
                className="lg:w-[60%] h-full sm:w-0 object-cover"
            />
            <div className="lg:w-[40%] sm:w-full">
                <div className="flex flex-col mx-auto lg:p-5 sm:p-2 lg:mt-[35%] sm:mt-[10%]">
                    <Link href={'/'} className="capitalize font-semibold text-green-1 text-lg mb-7">back home</Link>
                    <h2 className="text-3xl text-gray-3 font-semibold first-letter:capitalize text-left">welcome, login to <br />get started</h2>
                    <form className="w-full lg:py-10 sm:py-5">
                        <div className={`border-b-2 ${emailFocus ? 'border-green-1': 'border-gray-3'} lg:p-2 sm:p-1 flex flex-row items-center justify-between`}>
                            <input 
                                type="text" 
                                className=" w-full outline-none border-none"
                                placeholder="example@email.com"
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                            />
                            <MdOutlineEmail size={30}/>
                        </div>
                        <div className="lg:py-5 sm:py-3">
                            <div className={`border-b-2 ${passwordFocus ? 'border-green-1': 'border-gray-3'} lg:p-2 sm:p-1 flex flex-row items-center justify-between`}>
                                <input 
                                    type={password ? 'password': 'text' } 
                                    className=" w-full outline-none"
                                    placeholder="password"
                                    onFocus={() => setPasswordFocus(true)}
                                    onBlur={() => setPasswordFocus(false)}
                                />
                                <div 
                                    className="cursor-pointer hover:text-green-1"
                                    onClick={handlePassword}
                                >
                                    {
                                        password ? (
                                            <GoEye size={30}/>
                                        ):(
                                            <GoEyeClosed size={30}/>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="w-full py-5">
                            <button className="w-full p-5 text-white hover:text-green-1 font-semibold capitalize bg-green-1 rounded-lg hover:border-2 hover:border-green-1 hover:bg-transparent">
                                login
                            </button>
                        </div>
                        <p className="first-letter:capitalize text-center font-nold">don't have an account ?<Link className=" text-green-1 pl-1 capitalize" href={'/pages/auth/signup'}>register</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login