
const Menu: React.FC = ()=>{
    return (
        <div className="absolute top-0 left-0 w-screen h-screen px-6 md:hidden z-40">
            <div className="absolute -z-10 left-0 w-full h-full bg-gradient-to-b from-white to-veryDarkBlue opacity-50"></div>
            <div className="mt-28 bg-white rounded">
                <nav className="px-32 py-10">
                    <ul className="flex flex-col gap-7">
                        <li className="text-center">
                            <p className="inline text-sm italic font-bold hover:cursor-pointer font-viet text-darkBlue hover:opacity-50">Pricing</p>
                        </li>
                        <li className="text-center">
                            <p className="inline text-sm italic font-bold hover:cursor-pointer font-viet text-darkBlue hover:opacity-50">Product</p>
                        </li>
                        <li className="text-center">
                            <p className="inline text-sm italic font-bold hover:cursor-pointer font-viet text-darkBlue hover:opacity-50">About Us</p>
                        </li>
                        <li className="text-center">
                            <p className="inline text-sm italic font-bold hover:cursor-pointer font-viet text-darkBlue hover:opacity-50">Careers</p>
                        </li>
                        <li className="text-center">
                            <p className="inline text-sm italic font-bold hover:cursor-pointer font-viet text-darkBlue hover:opacity-50">Community</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};


export default Menu;


