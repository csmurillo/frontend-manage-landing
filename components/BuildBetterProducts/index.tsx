
import ExplanationBBP from "./ExplanationBBP";
import HeroBBP from "./HeroBBP";

const BuildBetterProducts:React.FC = ()=>{
    return (
        <div className="px-7 lg:px-0 lg:flex lg:flex-row-reverse lg:gap-32">
            <HeroBBP/>
            <ExplanationBBP/>
        </div>
    );
};


export default BuildBetterProducts;