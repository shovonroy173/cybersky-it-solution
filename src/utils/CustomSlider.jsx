/* eslint-disable react/prop-types */
import * as Slider from "@radix-ui/react-slider";

const CustomSlider = ({ value, handleValueChange }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm font-medium dark:text-gray-100 text-gray-600 transition-all duration-300 ease-in-out">
        <p >Paragraph font size</p>
        <p className="text-orange-600">{value}</p>
      </div>

      <Slider.Root
        className="relative flex items-center w-full "
        value={value}
        onValueChange={handleValueChange}
        min={0}
        max={100}
        step={1}
        aria-label="Custom Slider"
      >
        {/* Track */}
        <Slider.Track className="relative bg-gray-300 rounded-full h-1 w-full">
          <Slider.Range className="absolute h-full bg-orange-600 rounded-full" />
        </Slider.Track>

        {/* Thumb */}
        <Slider.Thumb
          className="block w-3 h-3 bg-orange-600 rounded-full shadow-lg focus:outline-none focus:ring-1 focus:ring-orange-300"
          aria-label="Slider Thumb"
        />
      </Slider.Root>
    </div>
  );
};

export default CustomSlider;
