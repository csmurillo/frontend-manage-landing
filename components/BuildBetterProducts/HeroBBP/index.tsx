// import Image from 'next/image';
import Image from 'next/image';

const HeroBBP:React.FC = ()=>{
    return(
        <div className='relative w-full h-72 mb-5 lg:h-[33.75em] lg:w-[30.32em] lg:min-w-[30.32em]'>
            <Image className='lg:object-cover' fill src='/images/illustration-intro.svg' alt="Build BetterProducts Hero Image"/>
        </div>
    );
};



export default HeroBBP;