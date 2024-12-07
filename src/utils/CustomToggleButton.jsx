/* eslint-disable react/prop-types */
const CustomToggleButton = ({isToggled , handleToggle}) => {


  return (
    <div className="flex items-center justify-between">
        <span className= "text-sm font-medium dark:text-gray-100 text-gray-600 transition-all duration-300 ease-in-out">
       Turn {isToggled ? "Off" : "On"} subtitles
      </span>
      <div
        className={`relative w-8 h-4 border  rounded-full cursor-pointer transition-colors duration-300 ${
          isToggled ? "bg-orange-600 border-orange-600" : "bg-white border-gray-100"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`absolute top-1/2 left-1 transform -translate-y-1/2 w-4 h-4 rounded-full   transition-transform duration-300 ${
            isToggled ? "translate-x-4 bg-white" : "-translate-x-1 bg-gray-200"
          }`}
        ></div>
      </div>
      
    </div>
  );
};

export default CustomToggleButton;
