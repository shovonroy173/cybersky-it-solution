import HomeCenterContainer from "../components/HomeContainer/HomeCenterContainer/HomeCenterContainer";
import HomeLeftContainer from "../components/HomeContainer/HomeLeftContainer";
import HomeRightContainer from "../components/HomeContainer/HomeRightContainer";
import SearchSettings from "../components/SearchSettings";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 p-3 ">
      <div className="block lg:hidden">
       <SearchSettings/>
      </div>
      <div className="hidden lg:block lg:w-1/6 lg:h-full">
      <HomeLeftContainer/>
      </div>
      <div className="w-full lg:w-[60%] h-full">
      <HomeCenterContainer />

      </div>
      <div className="hidden lg:block lg:w-1/6 lg:h-full">
      <HomeRightContainer />

      </div>

    </div>
  );
};

export default Home;
