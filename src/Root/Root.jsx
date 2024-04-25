import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;