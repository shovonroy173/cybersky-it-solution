/* eslint-disable react/prop-types */
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IoChevronDown } from "react-icons/io5";
import { vitamins } from "../assets/data";

const CustomDropdownMenu = ({selectedItem , handleSelect}) => {
  return (
    <div className="space-y-2">
<div className="flex justify-between items-center text-sm font-medium dark:text-gray-100 text-gray-600 transition-all duration-300 ease-in-out">
  <p>Choose your vitamin</p>
  <p className="text-orange-600">{selectedItem}</p>
</div>
    
    <DropdownMenu.Root>
      {/* Trigger Button */}
      <DropdownMenu.Trigger asChild>
        <div className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium flex justify-between items-center">
          <p>All Vitamin</p>
          <IoChevronDown />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="dark:bg-gray-700 bg-white rounded-lg p-2 w-48 transition-all duration-300 ease-in-out"
        >

          {vitamins.map((item)=>(
            <DropdownMenu.Item
            key={item.id}
            className="px-4 py-2 text-sm dark:text-gray-100 text-gray-600 hover:bg-gray-100 dark:hover:text-gray-600 focus:outline-none rounded-md"
            onSelect={() => handleSelect(item.name)}
          >
            {item.name}
          </DropdownMenu.Item>
          ))}

        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
    </div>
  );
};

export default CustomDropdownMenu;
