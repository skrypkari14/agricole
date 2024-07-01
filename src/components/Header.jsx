import React, {useContext} from 'react'
import LogoDefault from './logo/LogoDefault'
import {Context} from '../pages/AuthPage'
import LogoWhite from './logo/LogoWhite'
import SecondLogo from './logo/SecondLogo'

const Header = () => {
    const [selectedTab] = useContext(Context)
    return (
        <div className='flex justify-between items-center h-14 containerBank'>
            {
            selectedTab === 1 ? (
                <LogoDefault/>) : (
                <div className='flex items-center'><LogoWhite/>
                    <SecondLogo/></div>
            )
        }
            <div className='flex items-center gap-4 text-sm hidden md:block'>
                <p className='text-black dark:text-white'>Nie masz konta?</p>
                <a href='#' className='text-[#007d8F] hover:text-[#343a40] hover:underline font-semibold dark:text-[#99cc00]'>Załóż konto</a>
            </div>
        </div>
    )
}

export default Header
