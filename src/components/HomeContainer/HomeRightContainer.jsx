import { useState } from "react";
import { RiTextSnippet } from "react-icons/ri";
import { IoChevronUp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";

import CustomSlider from "../../utils/CustomSlider";
import CustomDropdownMenu from "../../utils/CustomDropdownMenu";
import CustomToggleButton from "../../utils/CustomToggleButton";

const HomeRightContainer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const [value, setValue] = useState([50]);

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
    console.log(`Selected: ${item}`);
  };

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className="dark:bg-gray-700 bg-white rounded-lg p-4 transition-all duration-300 ease-in-out">
      <div
        className={`border border-gray-200 p-2 rounded-md space-y-3 transition-all duration-600 ease-in-out`}
      >
        {/* drop down button start */}
        <div
          className="text-orange-600 flex justify-between items-center text-sm font-medium "
          onClick={() => handleOpen()}
        >
          <div className="flex justify-center items-center gap-2">
            <RiTextSnippet />
            <p>Settings</p>
          </div>
          <div>{open ? <IoChevronUp /> : <IoChevronDown />}</div>
        </div>
        {/* drop down button end */}

        {/* dropdown menu start */}
        <div
          className={`transition-all duration-300 ease-in-out space-y-3 ${
            open ? "opacity-0 max-h-0 " : " opacity-100 max-h-full "
          }`}
        >
          <CustomSlider value={value} handleValueChange={handleValueChange} />
          <CustomDropdownMenu
            selectedItem={selectedItem}
            handleSelect={handleSelect}
          />
          <CustomToggleButton
            isToggled={isToggled}
            handleToggle={handleToggle}
          />
        </div>
      </div>
      {/* drop down end */}
    </div>
  );
};

export default HomeRightContainer;
