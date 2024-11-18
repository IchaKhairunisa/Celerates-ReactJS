import { useId } from 'react'
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Navbar({onSearchChange}) {
  const inputId = useId()
  const { isLoggedIn, login, logout } = useUser();
  
  const handleSearchInput = (e) => {
    onSearchChange(e.target.value)
  }
  return (
    <nav className='grid grid-cols-3 justify-between px-24 py-4 bg-[#151616] items-center'>
        <ul>
          <li className="flex items-center justify-center space-x-2">
            <Link to="/" className="text-[#F2F4FF] hover:text-[#ad7f41] active:text-[#886332] flex items-center">
              <i className="bx bxs-coffee-bean mr-2"></i>
              <h4 className="mb-0">butterllyth coffee</h4>
            </Link>
          </li>
        </ul>
        <ul className='flex justify-center items-center'>
          <li className='w-full'>
          <input type="text" className='text-black active:text-black focus:text-black px-4 py-2 w-full' name="search" id={inputId} placeholder='Search product...' onChange={handleSearchInput} />
          </li>
        </ul>
        {!isLoggedIn ? (
            <ul className='flex gap-4 justify-end'>
              <li className='text-[#F2F4FF] hover:text-[#ad7f41] active:text-[#886332]'>
                {/* <Link to="">Sign in</Link> */}
                <button onClick={login}>Sign in</button>
              </li>
              <li>
                <Link className='text-[#F2F4FF] hover:text-[#ad7f41] active:text-[#886332]' to="/singup">Sign up</Link>
              </li>
          </ul>
        )
        : (
            <ul className='flex justify-end gap-4'>
              <li >
                <Link className='text-[#F2F4FF] hover:text-[#ad7f41] active:text-[#886332]' to="/cart">
                    Cart
                </Link>
              </li>
              <li >
                <Link to='/orders' className='text-[#F2F4FF] hover:text-[#ad7f41] active:text-[#886332]'>My Orders</Link>
              </li>
              <li>
                <button onClick={logout} className='text-[#F2F4FF] hover:text-[#ad7f41] active:text-[#886332]'>Sign out</button>
              </li>
            </ul>
        )}
    </nav>
  )
}