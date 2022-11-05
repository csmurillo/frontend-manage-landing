
const Menu: React.FC = ()=>{
    return (
        <div className="absolute top-0 left-0 w-full h-full px-6 lg:hidden">
            <div className="mt-28 bg-white rounded">
                <nav className="px-32 py-10">
                    <ul className="flex flex-col gap-7">
                        <li className="text-center">
                            <p className="inline text-sm italic hover:cursor-pointer font-viet text-darkBlue hover:opacity-50">Pricing</p>
                        </li>
                        <li className="text-center">
                            <p className="inline text-sm italic hover:cursor-pointer font-viet text-darkBlue hover:opacity-50">Product</p>
                        </li>
                        <li className="text-center">
                            <p className="inline text-sm italic hover:cursor-pointer font-viet text-darkBlue hover:opacity-50">About Us</p>
                        </li>
                        <li className="text-center">
                            <p className="inline text-sm italic hover:cursor-pointer font-viet text-darkBlue hover:opacity-50">Careers</p>
                        </li>
                        <li className="text-center">
                            <p className="inline text-sm italic hover:cursor-pointer font-viet text-darkBlue hover:opacity-50">Community</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};


export default Menu;



