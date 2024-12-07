import { socials } from "../../../assets/data";

const HomeCenterContainerSidebar = () => {
  return (
    <div
      className={`dark:bg-gray-700 bg-white pl-7 md:pt-16 flex flex-row md:flex-col gap-4 items-center mb-16 md:mb-0 py-5 rounded-b-lg md:rounded-br-none md:rounded-l-lg transition-all duration-300 ease-in-out`}
    >
      {socials.map((item) => (
        <div key={item.id} className="w-7 h-7">
          <img src={item.src} alt="" />
        </div>
      ))}
    </div>
  );
};

export default HomeCenterContainerSidebar;
