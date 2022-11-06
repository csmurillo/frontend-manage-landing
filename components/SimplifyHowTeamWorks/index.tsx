const SimplifyHowTeamWorks:React.FC = ()=>{
    return (
        <div className="h-[25.3rem] w-full flex items-center px-8 bg-brightRed lg:h-[13.75rem] lg:px-40 lg:py-16">
            <div className="w-full h-full flex flex-col justify-between lg:flex-row">
                <div className="h-full flex items-center">
                    <p className="text-white text-4xl text-center mb-20">Simplify how your team works today.</p>
                </div>
                <div className="flex justify-center">
                    <button className="px-9 py-4 bg-white rounded-full lg:rounded-2xl">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default SimplifyHowTeamWorks;