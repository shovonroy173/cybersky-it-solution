import { useLocation } from 'react-router-dom'
import ComingSoon from '../utils/ComingSoon'

const Explore = () => {
  const location = useLocation()
  return (
    <div><ComingSoon location={location.pathname}/></div>
  )
}

export default Explore