import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const Root = () => {

    const location = useLocation();

    const noHeaderNoFooter = location.pathname.includes('login') || location.pathname.includes('signup');


    return (
        <div className="font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
            {noHeaderNoFooter || <Footer></Footer>}
           
            
        </div>
    );
};

export default Root;