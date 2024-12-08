import { useState } from "react";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import HomeLeftContainer from "./HomeContainer/HomeLeftContainer";
import HomeRightContainer from "./HomeContainer/HomeRightContainer";

const SearchSettings = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      {/* drop down button  start */}
      <div
        className="text-orange-600 flex justify-between items-center text-md font-medium rounded-md px-6 py-3 bg-white"
        onClick={() => handleOpen()}
      >
        <div className="flex justify-center items-center gap-2">
          <BsFillGrid1X2Fill />
          <p>Search/Settings..</p>
        </div>
        <div>{open ? <IoChevronUp /> : <IoChevronDown />}</div>
      </div>
      {/* drop down button end */}

      {/* drop down content start */}
      <div
        className={`transition-all duration-300 ease-in-out space-y-3 dark:bg-gray-700 bg-white mt-3 rounded-md ${
          open ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
        }`}
      >
        <HomeLeftContainer />
        <hr />
        <HomeRightContainer />
      </div>
      {/* drop down content end */}
    </div>
  );
};

export default SearchSettings;
