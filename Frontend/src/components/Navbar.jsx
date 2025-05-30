import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import 'boxicons/css/boxicons.min.css'
import { useAuth0 } from '@auth0/auth0-react'


const Navbar = () => {
  const { loginWithRedirect , user, isLoading, isAuthenticated , logout } = useAuth0();

  console.log(user , "printing user info");

  //  if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

  return (
    <header className='bg-black py-1 px-7 flex justify-between items-center sticky top-0 z-50 w-full border-b-[0.3px] border-[#babaff]'>
      
      {/* left section */}
      <div className='flex lg:gap-14 gap-4 items-center'>
        <Link to= '/'>

        <img className='md:w-16 w-12' src='\images\logo.png'
        alt='logo-img'></img>

        </Link>
        
        <div className=' md:flex gap-5 items-center'>
          <button className='h-8 px-6 bg-gradient-to-r
           from-purple-500 to-indigo-600 rounded-lg
            font-medium text-nowrap hove:opacity-70 
            tranisition-all duration-300' >
            Play Now
          </button>

          <div>
            <Link to = '/about'>
              <p>About</p>
            </Link>
          </div>

          <div className='flex gap-1 justify-center items-center group relative '>

             <span>Student</span>

             <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"
               class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
             </div>

             <div className='group-hover:block hidden absolute dropdown-menu top-6 left-16 w-[50rem]'>

                <div className='flex  gap-2 max-w-full py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    
                    <div className='flex flex-col gap-3 justify-center'>

                      <Link to='/line-tracker'>

                      <div>
                        <p className='font-bold text-1xl text-center'>Line Tracker Bot</p>

                        <img
                         src="public\images\Line_follower_robot.jpg" alt="" />
                      </div>
                      
                      </Link>

                    </div>

                     <div className='flex flex-col gap-3 justify-center'>

                      <div>
                        <p className='font-bold text-1xl text-center'>Line Tracker Bot</p>

                        <img
                         src="public\images\Line_follower_robot.jpg" alt="" />
                      </div>

                    </div>

                     <div className='flex flex-col gap-3 justify-center'>

                      <div>
                        <p className='font-bold text-1xl text-center'>Line Tracker Bot</p>

                        <img
                         src="public\images\Line_follower_robot.jpg" alt="" />
                      </div>

                    </div>

                </div>

            </div>
          </div>
        </div>
      </div>

      {/* right side */}

      <nav className='flex md:gap-4 items-center'>

        {isAuthenticated && <h2 className='animation-pulse'>Hello {user.name}</h2>}
        
        {isAuthenticated && <button onClick={(e) => logout()}>Logout</button> }

        <div className='group relative'>
          <Link to= '/'>
                < i class='bx  bx-user-circle' ></i> DashBoard 
          </Link>

           <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                  {isAuthenticated && <Link to='/myProfile'><p className='cursor-pointer hover:text-black'>MyProfile</p></Link> }          
                  <p className='cursor-pointer hover:text-black'>Orders</p>
                  <button  onClick={(e) => loginWithRedirect()}>LogIn</button>

                </div>
            </div>

        </div>
          
      </nav>

    </header>
  )
}

export default Navbar