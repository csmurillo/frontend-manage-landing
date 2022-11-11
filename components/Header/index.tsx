import React, {useState,useEffect} from "react";
import Image from "next/image";

import Menu from "./Menu";

// svgs
import Logo from '../../public/images/logo.svg';

const Header: React.FC = ()=>{

    const [menuToggle,setMenuToggle] = useState(false);

    const openMenu = ()=>{
        document.getElementsByTagName('body')[0].classList.add("overflow-y-hidden");
        setMenuToggle(true);
    };
    const closeMenu = ()=>{
        document.getElementsByTagName('body')[0].classList.remove("overflow-y-hidden");
        setMenuToggle(false);
    };

    useEffect(() => {
        const closeMenuResize = ()=>{
            if(window.innerWidth>768){
                setMenuToggle(false);
                document.getElementsByTagName('body')[0].classList.remove("overflow-y-hidden");
            }
        };
        window.addEventListener('resize',closeMenuResize);

        ()=>{
            window.removeEventListener('resize',closeMenuResize);
        }
    }, []);

    return (
        <>
            <header className="flex justify-between mb-[3rem] xl:mb-[7.5rem]">
                <div className="flex items-center">
                    <div className="relative w-28 h-5 z-50">
                        <Logo/>
                    </div>
                </div>
                <div className="hidden md:flex md:items-center">
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
                (<div className="relative w-6 h-5 flex items-center md:hidden z-50">
                    <Image className="cursor-pointer" fill src='/images/icon-close.svg' alt="close menu button" onClick={closeMenu}/>
                </div>)
                :
                (<div className="relative w-6 h-5 flex items-center md:hidden">
                    <Image className="cursor-pointer" fill src='/images/icon-hamburger.svg' alt="menu button" onClick={openMenu}/>
                </div>)
                }
            </header>
            {menuToggle && <Menu/>}
        </>
    );
};


export default Header;