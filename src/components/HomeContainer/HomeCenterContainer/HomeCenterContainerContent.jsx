import { FaStar } from "react-icons/fa";

const HomeCenterContainerContent = () => {
  return (
    <div className="dark:bg-gray-700 bg-white space-y-4 p-8  rounded-t-lg md:rounded-tl-none  md:rounded-r-lg transition-all duration-300 ease-in-out">
      <div className="w-full flex justify-center flex-wrap lg:flex-nowrap gap-4">
        <div className="w-full lg:w-1/2 space-y-2 lg:space-y-4">
          <div className="text-xl lg:text-3xl font-extrabold  dark:text-gray-100 text-gray-900 ">
            Health Benefits of An Avocado
          </div>
          <div>
            <p className="text-md lg:text-lg font-bold dark:text-gray-200 text-gray-800">
              Support eye health
            </p>
            <p className="text-xs lg:text-sm  dark:text-gray-400 text-gray-600 transition-all duration-300 ease-in-out">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat ea
              quos quasi provident reiciendis mollitia unde sint ducimus fugit
            </p>
          </div>
          <div>
            <p className="text-lg font-bold dark:text-gray-200 text-gray-800 transition-all duration-300 ease-in-out">
              Support eye health
            </p>
            <p className="text-sm  dark:text-gray-400 text-gray-600 transition-all duration-300 ease-in-out">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat ea
              quos quasi provident reiciendis mollitia unde sint ducimus fugit
            </p>
          </div>
        </div>
        <div className="w-full  lg:w-1/2 ">
          <img src="./avocado.jpg" alt="" className="w-full rounded-md" />
        </div>
      </div>

      <div>
        <p className="text-lg font-bold dark:text-gray-200 text-gray-800 transition-all duration-300 ease-in-out">Support eye health</p>
        <p className="text-sm  dark:text-gray-400 text-gray-600 transition-all duration-300 ease-in-out">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vitae
          in dignissimos! Cumque ipsum ipsa tenetur dolorem quaerat qui quo,
          magni pariatur iste illum repellat eaque itaque unde ratione
          dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officiis est temporibus unde nam distinctio expedita. Ut minima in
          omnis, eos ex facilis inventore soluta pariatur aperiam sapiente,
          repellendus, dignissimos doloribus! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptate quos, debitis in, ab labore
          molestiae, cupiditate quasi tempore vero doloremque ut nisi sequi
          consectetur? Nam impedit quia consequatur eveniet dolore.
        </p>
      </div>

      <div className="w-full flex justify-center items-center flex-wrap lg:flex-nowrap gap-4">
        <div className="w-full lg:w-1/2">
          <img src="./apple.jpg" alt="" className="w-full rounded-md" />
        </div>
        <div className="w-full lg:w-1/2 space-y-3">
          <div>
            <p className="text-lg font-bold dark:text-gray-200 text-gray-800 transition-all duration-300 ease-in-out">
              Support eye health
            </p>
            <p className="text-sm  dark:text-gray-400 text-gray-600 transition-all duration-300 ease-in-out">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat ea
              quos quasi provident reiciendis mollitia unde sint ducimus fugit
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              veniam rem praesentium deserunt sunt porro, quidem ullam eum.
              Totam maiores quas porro culpa quos veritatis, numquam temporibus
              architecto ex molestiae! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Non corporis ipsam earum. Error, a libero,
              asperiores harum odio adipisci, modi rem pariatur neque ex tenetur
              culpa laborum. Quos, fuga eligendi.
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <p className="text-lg font-bold dark:text-gray-200 text-gray-800 transition-all duration-300 ease-in-out">
        Was This Helpful?

        </p>
        <div className="text-orange-600 flex gap-4">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />

        </div>

      </div>
    </div>
  );
};

export default HomeCenterContainerContent;
