import { Link } from 'react-router-dom';
import vinylLog from '../../assets/vinylLog.jpg';



const Logo = () => {
    return (
        <Link to="/" className="flex items-center space-x-2" aria-label="Go to about page">  
        <img src={vinylLog} alt=" " className="h-10 w-10" /> 
        <span className="text-xl font-bold">Font Hill Records</span>
        </Link>
      )
}
 
export default Logo;