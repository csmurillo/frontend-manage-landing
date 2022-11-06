
import ExplanationBBP from "./ExplanationBBP";
import HeroBBP from "./HeroBBP";

const BuildBetterProducts:React.FC = ()=>{
    return (
        <div className="mb-24 lg:px-0 lg:flex lg:flex-row-reverse lg:gap-32 lg:mb-32">
            <HeroBBP/>
            <ExplanationBBP/>
        </div>
    );
};


export default BuildBetterProducts;