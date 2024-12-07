import HomeCenterContainerContent from "./HomeCenterContainerContent";
import HomeCenterContainerSidebar from "./HomeCenterContainerSidebar";

const HomeCenterContainer = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row  ">
      <HomeCenterContainerSidebar/>
      <HomeCenterContainerContent/>
    </div>
  );
};

export default HomeCenterContainer;
