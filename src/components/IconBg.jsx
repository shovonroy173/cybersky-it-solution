/* eslint-disable react/prop-types */
const IconBg = ({active , changeIconBG , icon}) => {
  return (
  <div className={`p-1.5 rounded-md  text-xs text-center   ${active ? "bg-orange-200 border border-orange-400 text-orange-600": "bg-gray-300 text-gray-700 border border-gray-300"}`} onClick={changeIconBG}>
        {icon}
    </div>
  )
}

export default IconBg