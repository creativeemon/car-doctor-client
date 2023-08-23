import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NaveBer from "../Pages/Shared/NavBer/NaveBer";




const Main = () => {
    return (
        <div>
            <NaveBer></NaveBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;