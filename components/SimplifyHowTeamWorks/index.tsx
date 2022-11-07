const SimplifyHowTeamWorks:React.FC = ()=>{
    return (
        <div className="bg-brightRed flex flex-col px-8 py-20 lg:flex-row lg:justify-between lg:px-40">
            <div className="mb-20 lg:mb-0 lg:w-[445px]">
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