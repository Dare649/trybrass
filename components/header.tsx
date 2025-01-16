import Logo from "@/public/logo";
import { nav1 } from "./dummy";
import Nigeria from "@/public/flag/nigeria";
import { FaArrowRight } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { toggleFoot } from "@/redux/features/footSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { snav } from "./dummy";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

const Header = () => {
    const [open, setOpen] = useState(false);
    const dispatch: AppDispatch = useDispatch();

    const openFoot = useSelector((state: RootState) => state.foot.openFoot);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    }

  return (
    <div>
        <div className='desktop-view hidden lg:flex fixed top-0 w-full'>
            <div className='w-full h-[81px] bg-black-2 z-50'>
                <div className='w-full px-[120px] py-5 flex flex-row items-center justify-between'> 
                    <div className='w-full flex flex-row items-center gap-x-10'>
                        <Logo/>
                        <div className="flex flex-row items-center gap-x-5 mt-2">
                            {
                                nav1.map((item, id) => (
                                    <div key={id} className="text-white-1 capitalize text-md">
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full flex flex-row items-center justify-end gap-x-5">
                        <h4 className="text-white-1 capitalize">resources</h4>
                        <Link href={'/pages/auth/login'} className="text-white-1 capitalize">login</Link>
                        <Link
                            href={'/pages/auth/signup'}
                            className="rounded-lg bg-green-1 text-white-1 capitalize py-3 px-5"
                        >
                            open an account
                        </Link>
                        <Nigeria />
                    </div>
                </div>
                <div className="bg-black-1 w-full fixed top-20 z-50">
                    <div className="flex items-center justify-center py-2">
                        <div className="flex items-center gap-x-3">
                            <button className="bg-green-1 rounded-lg p-1 uppercase text-white-1 text-sm">new</button>
                            <h6 className="capitalize text-white-1 text-sm">introducing brass payroll: the ultimate payroll solution for your business</h6>
                            <FaArrowRight className="text-white-1"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="w-full lg:hidden sm:flex">
    <div className="w-full relative">
        {/* Fixed Button at the Bottom */}
        

        {/* Menu at the Top, which should cover the button when opened */}
        <div className="w-full bg-black-2 z-50 p-5 fixed top-0">
            <div className="w-full flex items-center justify-between">
                <Logo />
                <div className="text-white-1" onClick={handleOpen}>
                    <IoMenu size={30} />
                </div>
            </div>
        </div>

        {/* Dropdown menu when open */}
        {open && (
            <div className="fixed top-16 right-0 h-full z-40 bg-black-0 w-full text-white p-2">
                {snav.map((item) => (
                    <div key={item.id} className="border-b-2 border-gray-3 py-5">
                        <div
                            className="flex items-center justify-between w-full"
                            onClick={() => dispatch(toggleFoot(item.id))}
                        >
                            <div className="capitalize flex items-center justify-between w-full">
                                {item.link ? (
                                    <Link href={item.link}>{item.head}</Link>
                                ) : (
                                    <span>{item.head}</span>
                                )}

                                <h4>
                                    {item.head.toLowerCase() === "country" && <Nigeria />}
                                </h4>
                            </div>
                            {!(["customer", "country", "login", "open an account"].includes(item.head.toLowerCase())) && (
                                openFoot === item.id ? (
                                    <IoIosArrowUp className="text-xl text-gray-2 transition-transform duration-500" />
                                ) : (
                                    <IoIosArrowDown className="text-xl text-gray-2 transition-transform duration-500" />
                                )
                            )}
                        </div>
                        {openFoot === item.id && item.underlings && (
                            <div className="capitalize text-white my-3">
                                <ul>
                                    {item.underlings.map((underling, index) => (
                                        <li key={index} className="py-3">
                                            {underling}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        )}

        {/* Bottom Content */}
        <div className="bg-black-1 p-3 mt-16 w-full fixed">
            <p className="text-center text-white-1 text-xs leading-relaxed tracking-wide">
                Introducing Brass Payroll: The Ultimate <br /> Payroll Solution for Your Business
            </p>
        </div>
        <div className="w-full fixed bottom-0 z-50">
            <button className="text-white-1 bg-green-1 py-5 px-8 first-letter:capitalize w-full">open an account in 10 minutes</button>
        </div>
    </div>
</div>

    </div>
  )
}

export default Header;
