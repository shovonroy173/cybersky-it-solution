/* eslint-disable react/prop-types */
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="relative ">
      <Navbar />
      <Sidebar />
      <div 
      className={`absolute top-14 left-0 lg:left-16 dark:bg-gray-900 bg-gray-200 dark:rounded-tl-none rounded-tl-lg w-full h-screen overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out`}
      >
        {children}
        </div>
    </div>
  );
};

export default Layout;
