import React, {useState} from "react";
import Image from "next/image";

import Menu from "./Menu";

// svgs
import Logo from '../../public/images/logo.svg';
import MenuIcon from '../../public/images/icon-hamburger.svg';
import CloseIcon from '../../public/images/icon-close.svg';

const Header: React.FC = ()=>{

    const [menuToggle,setMenuToggle] = useState(false);

    const openMenu = ()=>{
        setMenuToggle(true);
    };
    const closeMenu = ()=>{
        setMenuToggle(false);
    };

    return (
        <>
            <header className="flex justify-between mb-[3rem] lg:mb-[7.5rem]">
                <div className="flex items-center">
                    <div className="relative w-28 h-5">
                        <Logo/>
                    </div>
                </div>
                <div className="hidden lg:flex lg:items-center">
                    <nav>
                        <ul className="flex gap-10">
                            <li className="text-center">
                                <p className="text-sm italic hover:cursor-pointer font-viet text-darkBlue hover:opacity-50">Pricing</p>
                            </li>
                            <li className="text-center">
                                <p className="text-sm italic hover:cursor-pointer font-viet text-darkBlue hover:opacity-50">Product</p>
                            </li>
                            <li className="text-center">
                                <p className="text-sm italic hover:cursor-pointer font-viet text-darkBlue hover:opacity-50">About Us</p>
                            </li>
                            <li className="text-center">
                                <p className="text-sm italic hover:cursor-pointer font-viet text-darkBlue hover:opacity-50">Careers</p>
                            </li>
                            <li className="text-center">
                                <p className="text-sm italic hover:cursor-pointer font-viet text-darkBlue hover:opacity-50">Community</p>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="hidden lg:block">
                    <button className="px-9 py-3 bg-brightRed rounded-3xl text-white hover:bg-[#F98F75]">Get Started</button>
                </div>
                {menuToggle ?
                (
                    <CloseIcon className="relative w-6 h-5 flex items-center lg:hidden z-50 hover:cursor-pointer"/>
                ) 
                // (<div className="relative w-6 h-5 flex items-center lg:hidden z-50">
                //     <Image className="cursor-pointer" fill src={CloseIcon} alt="close menu button" onClick={()=>{closeMenu()}}/>
                // </div>)
                :
                // (<div className="relative w-6 h-5 flex items-center lg:hidden">
                //     <MenuIcon className="relative w-6 h-5 flex items-center lg:hidden hover:cursor-pointer bg-black" />
                // </div>)
                (<div className="relative w-6 h-5 flex items-center lg:hidden">
                    <Image className="cursor-pointer" fill src='/images/icon-hamburger.svg' alt="menu button" onClick={()=>{openMenu()}}/>
                </div>)
                }
            </header>
            {menuToggle && <Menu/>}
        </>
    );
};


export default Header;