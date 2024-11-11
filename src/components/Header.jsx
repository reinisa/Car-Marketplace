import React from 'react'
import { UserButton, useUser } from '@clerk/clerk-react';
import { Button } from './ui/button'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { SignInButton } from '@clerk/clerk-react'

function Header() {

    const {user,isSignedIn}=useUser();
  return (
    <div className='flex justify-between items-center shadow-sm m-0 p-6'>
        <Link to={'/'}>
            <img src={logo} width={150} height={100} className='ml-0  px-0'/>
        </Link>
        

        <ul className=' hidden md:flex gap-11'>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Preowned</li>
        </ul>

        {/* <div>
        <SignInButton mode='modal' forceRedirectUrl='/profile'>
            <Button>Sign In</Button>
        </SignInButton>
        </div> */}

        {isSignedIn? (
            <div className='flex items-center gap-5'>
                <UserButton/>
                <Link to={'/profile'}>
                    <Button>Submit Listing</Button>
                </Link>
                
            </div>
        ) : ( 
            <SignInButton mode='modal' forceRedirectUrl='/profile'>
                <Button>Submit Listing</Button>
            </SignInButton>
        )}
    </div>
  )
}
export default Header