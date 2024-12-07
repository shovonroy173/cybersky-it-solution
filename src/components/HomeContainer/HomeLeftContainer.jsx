import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { tabcontents, tabs } from "../../assets/data";
import IconBg from "../IconBg";
const HomeLeftContainer = () => {
  const [active, setActive] = useState(0);
  const [select, setSelect] = useState(0);
  const [open, setOpen] = useState(true);

  const [searchVal, setSearchVal] = useState("");
  const [items, setItems] = useState(tabcontents[active].content);

  useEffect(() => {
    setItems(tabcontents[active].content);
    setSearchVal(""); 
    setOpen(true); 
  }, [active]);

  const handleSearch = (value) => {
    console.log("LINE AT 15", value);

    if (value === "") {
      setItems(tabcontents[active].content);
    } else {
      const filteredItems = tabcontents[active].content.filter((item) =>
        item.title.toLowerCase().includes(value)
      );
      setItems(filteredItems);
    }
  };
  console.log("LINE AT 23", active);

  return (
    <div className="dark:bg-gray-700 bg-white w-full h-full text-sm p-2 space-y-2  rounded-lg transition-all duration-300 ease-in-out">
      <div className="flex  border border-orange-200 p-1 rounded-lg">
        {tabs.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActive(index)}
            className={`${
              active === index
                ? "dark:bg-orange-200  bg-orange-200/30 text-orange-500 "
                : "dark:bg-gray-700 bg-white dark:text-gray-200 text-gray-600 "
            } rounded-md font-medium w-1/2 px-3 py-1 transition-all duration-300 ease-in-out`}
          >
            <p>{item.title}</p>
          </button>
        ))}
      </div>
      <div className="flex items-center relative border border-gray-300 p-1 w-full rounded-md">
        <input
          type="text"
          placeholder={`Search for ${tabs[
            active
          ]?.title.toLocaleLowerCase()} names..`}
          value={searchVal}
          onChange={(e) => (
            setSearchVal(e.target.value), handleSearch(e.target.value), setOpen(true)
          )}
          className="border-none outline-none w-full text-sm dark:text-gray-100 text-gray-400 dark:bg-gray-700 bg-white transition-all duration-300 ease-in-out"
        />
        <div
          className="absolute right-0.5"
          onClick={() => handleSearch(searchVal)}
        >
          <IconBg active={true} icon={<CiSearch />} />
        </div>
      </div>
      <p className="font-medium dark:text-gray-200 text-gray-600">{tabs[active]?.title} List</p>
      <div className="overflow-y-auto pr-2 transition-all duration-300 ease-in-out">
        {
        items.length !== 0 && open ? (
          items.map((item, index) => (
            <div
              key={item.id}
              className={`flex gap-2 ${
                select === index
                  ? "border border-orange-700 rounded-lg"
                  : " border dark:border-gray-700 border-white rounded-lg"
              } transition-all duration-300 ease-in-out m-1   p-1`}
              onClick={() => (setSelect(index), setSearchVal(item.title), setOpen(false))}
            >
              <div className="w-10 h-10">
                <img src={item.img} alt="" />
              </div>
              <div>
                <p className="font-medium dark:text-gray-100 text-gray-600">{item.title}</p>
                <p className="dark:text-gray-300 text-gray-400 text-xs">{item.desc}</p>
              </div>
            </div>
            ))
        ) : <p>{items.length ? "" : "No items found.."} </p>
        
        }
      </div>
    </div>
  );
};

export default HomeLeftContainer;
