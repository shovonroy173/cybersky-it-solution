import  { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { MdLightMode , MdDarkMode} from "react-icons/md";
import IconBg from '../components/IconBg';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className=""
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <IconBg active={true} icon={<MdDarkMode />} /> : <IconBg active={true} icon={<MdLightMode />} />}
    </button>
  );
};

export default DarkModeToggle;
