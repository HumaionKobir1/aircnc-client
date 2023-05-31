import { Outlet } from "react-router-dom";
import Navber from "../components/Share/Navber/Navber";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            
            <div className="pt-28 pb-20">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Main;