import { Outlet } from "react-router-dom";
import Navber from "../components/Share/Navber/Navber";
import Footer from "../components/Share/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            
            <div className="pt-28 pb-20">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Main;