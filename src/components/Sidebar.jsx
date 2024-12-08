import { Link, useLocation } from "react-router-dom";
import { urls } from "../assets/data";
import IconBg from "./IconBg";
console.log(urls);

const Sidebar = () => {

  const location = useLocation();
  
  return (
    <div className={`dark:bg-gray-700 bg-white w-full h-10 flex fixed bottom-0 left-0 lg:top-10 lg:w-16 lg:h-screen lg:flex-col  gap-10 justify-center items-center z-10 transition-all duration-300 ease-in-out`}>
      {urls.map((item) => (
        <Link to={item.url} key={item.id}>
            <IconBg active={location.pathname === item.url} icon={<item.icon />}/>
          
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
