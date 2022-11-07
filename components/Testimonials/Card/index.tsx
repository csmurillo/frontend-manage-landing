import Image from "next/image";

interface CardProps{
    testimonailImage:string,
    testimonailName:string,
    testimonial:string
}
const Card: React.FC<CardProps> = ({testimonailImage,testimonailName,testimonial})=>{
    return (
        <div className="flex relative pb-10 w-full lg:min-h-[256px] lg:min-w-[540px]">
            <div className="absolute top-0 left-0 w-full h-full bg-veryLightGray -z-10 mt-9 flex-1"></div>
            <div className="w-full">
                <div className="flex justify-center mb-6">
                    <div className="relative w-[4.5rem] h-[4.5rem]">
                        <Image fill src={testimonailImage} alt="Image of testimonial"/>
                    </div>
                </div>
                <div className="mb-6">
                    <p className="text-center text-base font-bold">{testimonailName}</p>
                </div>
                <div>
                    <p className="text-center text-sm px-5 text-darkBlue opacity-50">{testimonial}</p>
                </div>
            </div>
        </div>
    );
};


export default Card;