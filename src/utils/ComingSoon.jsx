/* eslint-disable react/prop-types */

const ComingSoon = ({location}) => {
  const transformWord = (word)=> {
    // Remove all slashes
    const noSlashes = word.replace(/\//g, "");
    
    // Capitalize the first letter
    const capitalized = noSlashes.charAt(0).toUpperCase() + noSlashes.slice(1);
    
    return capitalized;
  }
  return (
    <div className='flex justify-center items-center mt-20'>
      <p className="text-xl font-semibold dark:text-gray-200 text-gray-600 transition-all duration-300 ease-in-out w-[100px]">{transformWord(location)}</p>
        <img src="./soon.png" alt="" />
    </div>
  )
}

export default ComingSoon