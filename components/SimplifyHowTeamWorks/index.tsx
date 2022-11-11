import Image from 'next/image'
const SimplifyHowTeamWorks:React.FC = ()=>{
    return (
        <div className="relative bg-brightRed flex flex-col px-8 py-20 lg:flex-row lg:justify-between lg:px-40 overflow-hidden">
            <div className='absolute top-0 -left-[31.25rem] w-[37.5rem] h-[37.5rem] lg:top-0 lg:left-[6.25rem] lg:w-[37.5rem] lg:h-[37.5rem] opacity-10'>
                <Image fill src="/images/bg-simplify-section.svg" alt="background image"/>
            </div>
            <div className="mb-20 lg:mb-0 lg:w-[27.8125rem]">
                <p className="text-4xl text-center text-white lg:text-start">Simplify how your team works today.</p>
            </div>
            <div className="flex justify-center">
                <div className="flex items-center">
                    <button className="inline bg-white text-brightRed px-9 py-4 rounded-full lg:py-2">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default SimplifyHowTeamWorks;