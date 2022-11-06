

const ManageBulletPoints:React.FC = ()=>{
    return (
        <div className="-mr-6">
            <dl className="flex flex-col list-none	">
                <li className="mb-12">
                    <div className="mb-2">
                        <hgroup className="relative flex h-10">
                            <h2 className="absolute left-0 px-6 pt-1 pb-3 rounded-full bg-brightRed text-white">01</h2>
                            <p className="flex-1 pl-20 bg-veryPaleRed font-bold text-base rounded-l-full lg:bg-inherit">Track company-wide progress</p>
                        </hgroup>
                    </div>
                    <div>
                        <p className="text-darkBlue pl-20 opacity-50 text-sm leading-7">See how your day-to-day tasks fit into the wider vision. Go from 
                            tracking progress at the milestone level all the way done to the 
                            smallest of details. Never lose sight of the bigger picture again.</p>
                    </div>
                </li>
                <li className="mb-12">
                    <div className="mb-2">
                        <hgroup className="relative flex h-10">
                            <h2 className="absolute left-0 px-6 pt-1 pb-3 rounded-full bg-brightRed text-white">02</h2>
                            <p className="flex-1 pl-20 bg-veryPaleRed font-bold text-base rounded-l-full lg:bg-inherit">Advanced built-in reports</p>
                        </hgroup>
                    </div>
                    <div>
                        <p className="text-darkBlue pl-20 opacity-50 text-sm leading-7">
                            Set internal delivery estimates and track progress toward company 
                            goals. Our customisable dashboard helps you build out the reports 
                            you need to keep key stakeholders informed.
                        </p>
                    </div>
                </li>
                <li className="mb-12">
                    <div className="mb-2">
                        <hgroup className="relative flex h-10">
                            <h2 className="absolute left-0 px-6 pt-1 pb-3 rounded-full bg-brightRed text-white">03</h2>
                            <p className="flex-1 pl-20 bg-veryPaleRed font-bold text-base rounded-l-full lg:bg-inherit">Everything you need in one place</p>
                        </hgroup>
                    </div>
                    <div>
                        <p className="text-darkBlue pl-20 opacity-50 text-sm leading-7">
                            Stop jumping from one service to another to communicate, store files, 
                            track tasks and share documents. Manage offers an all-in-one team 
                            productivity solution.
                        </p>
                    </div>
                </li>
            </dl>
        </div>
    );
};

export default ManageBulletPoints;