
import AuraAudit from '../assets/AuraAudit_Logo.svg';
import ToggleTheme from './ToggleTheme';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <div className='flex justify-around items-center text-center place-items-center  border-gray-700  dark:border-gray-200  border-b-[1px] pb-4 mx-1 sm:mx-4'>
        <div className='flex items-center justify-center mt-6'>
          <Link to="/"><img className='w-8 h-8' src={AuraAudit} /></Link>
          <h2 className='font-Poppins text-2xl font-bold mx-3 text-white  dark:text-dark-purple'><Link to="/">La passion</Link></h2>
        </div>
        <div className='flex items-center flex-row mt-6 '>
          <ToggleTheme />
        </div>
      </div>
    </>
  )
}

