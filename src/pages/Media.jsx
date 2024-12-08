import { useLocation } from 'react-router-dom'
import ComingSoon from '../utils/ComingSoon'

const Media = () => {
  const location = useLocation()
  return (
    <div><ComingSoon location={location.pathname}/></div>
  )
}

export default Media