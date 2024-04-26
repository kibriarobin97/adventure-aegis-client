import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Headers></Headers>
                <Outlet></Outlet>
            </div>
            <div className="w-full mx-auto bg-[#EBEEF3]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;