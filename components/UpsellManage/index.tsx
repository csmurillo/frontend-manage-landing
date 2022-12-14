import Manage from "./Manage";
import ManageDescriptionPoints from "./ManageDescriptionPoints";


const UpsellManage:React.FC=()=>{
    return (
        <div className="lg:flex lg:gap-32 mb-16">
            <Manage/>
            <ManageDescriptionPoints/>
        </div>
    );
};

export default UpsellManage;