import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useLocation } from "react-router-dom";

const Main = () => {

   const location = useLocation();
  
    // Pages where we don't want to show Header and Footer
    const hideHeaderFooter = ["/login", "/dashboard"].includes(location.pathname);
  return (
    <div>
    {!hideHeaderFooter && <Header />}
      <Outlet />
      
{!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default Main;
