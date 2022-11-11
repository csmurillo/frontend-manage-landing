// import Image from 'next/image';
import Image from 'next/image';

const HeroBBP:React.FC = ()=>{
    return(
        <div className='relative w-full h-72 mb-5 lg:h-[30.3125rem] lg:w-[36.25rem] lg:min-w-[36.25rem]'>
            <Image fill src='/images/illustration-intro.svg' alt="Build BetterProducts Hero Image"/>
        </div>
    );
};



export default HeroBBP;