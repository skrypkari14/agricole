import React, {useContext, useState} from 'react'
import User from './icons/User'
import Case from './icons/Case'
import Keyboard from './icons/Keyboard'
import Info from './icons/Info'
import bell from '../img/bell-1000.png'
import {Context} from '../pages/AuthPage'
import advert_car from '../img/login-advert-car.png'
import eco from '../img/login-advert-eco.png'
import eco_case from '../img/login-advert-eco-case.png'
import MobileLogo from './logo/MobileLogo'
import Cancel from './icons/Cancel'

const Main = () => {

    const [selectedTab, setSelectedTab] = useContext(Context);

    return (
        <div className='main-section containerBank'>
            <div className='flex flex-col lg:flex-row lg:justify-center h-full'>
                <a className='pl-4 py-3 pr-1 bg-[#007d8F] hover:bg-[#058699] dark:bg-[#99cc00] dark:hover:bg-[#C2E066] rounded-xl my-4 flex justify-between'>
                    <div className='flex'>
                        <div className='bg-[#006675] w-[44px] h-[44px] px-[4px] py-[10px] rounded-lg'>
                            <MobileLogo/>
                        </div>
                        <div className='ml-4 text-white dark:text-black'>
                            <h3 className='font-semibold text-sm'>Pobierz aplikację CA24 Mobile</h3>
                            <p className='text-sm'>Aplikację pełną korzyści</p>
                        </div>
                    </div>
                    <button> <Cancel/></button>
                </a>
                <div className='flex items-center justify-between'>
                    <div className='w-full lg:w-5/12 mb-8 lg:mb-0'>
                        <div className='topbar bg-[#E6F1F3] dark:bg-[#E9E9E9] rounded-t-2xl flex overflow-hidden'>
                            <div className={
                                    `selectableTab p-5 flex items-center cursor-pointer transition-all ${
                                        selectedTab === 1 ? 'selectedTab bg-white rounded-t-2xl' : 'text-[#666666]'
                                    }`
                                }
                                onClick={
                                    () => {
                                        setSelectedTab(1);
                                        document.body.classList.remove('dark')
                                    }
                            }>
                                <User color={
                                    selectedTab === 1 ? '#007D8F' : '#666666'
                                }/>
                                <p className='pl-2 font-medium text-sm'>Klient indywidualny</p>
                            </div>
                            <div className={
                                    `selectableTab p-5 flex items-center cursor-pointer transition-all ${
                                        selectedTab === 2 ? 'selectedTab bg-white rounded-t-2xl' : 'text-[#666666]'
                                    }`
                                }
                                onClick={
                                    () => {
                                        setSelectedTab(2);
                                        document.body.classList.add('dark')
                                    }
                            }>
                                <Case color={
                                    selectedTab === 2 ? '#99cc00' : '#666666'
                                }/>
                                <p className='pl-2 text-sm font-medium'>Klient indywidualny</p>
                            </div>
                        </div>
                        <div className='p-8 bg-white rounded-b-2xl min-w-[10.5rem]'>
                            <div className='flex items-center justify-between'>
                                <h4 className='text-xl font-semibold'>Zaloguj się</h4>
                                <button className='keyboardBtn h-11 w-11 flex items-center justify-center rounded-xl transition-all'>
                                    <Keyboard/>
                                </button>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='w-full relative'>
                                    <label for="login" className='inputLabel text-[#666666] transition-all'>Identyfikator</label>
                                    <input id="login" type='text' className='inputLogin outline-none w-full border-[#C8C8C8] hover:border-[#99CC00] focus:border-[#99CC00] border'/>
                                </div>
                                <button>
                                    <div className='ml-2 infoBtn rounded-xl transition-all'>
                                        <Info/>
                                    </div>
                                </button>
                            </div>
                            <div className='flex items-center justify-between my-4'>
                                <a href='#' className='text-[#007d8F] hover:text-[#333F52] hover:underline text-xs font-semibold'>Pierwsze logowanie</a>
                                <a href='#' className='text-[#007d8F] hover:text-[#333F52] hover:underline text-xs font-semibold'>Pomoc w logowaniu</a>
                            </div>
                            <button className='w-full text-[#888888] text-sm font-semibold py-3 bg-[#e9e9e9] rounded-xl'>Dalej</button>
                        </div>
                    </div>
                    {
                    selectedTab === 1 ? (
                        <div className='w-1/2 hidden lg:block flex items-center'>
                            <div className='grow-0'>
                                <h2 className='text-black text-2xl font-semibold mb-2'>Zmiana w logowaniu do serwisu CA24 eBank</h2>
                                <p className='text-sm text-[#666] font-normal'>
                                    Dodaliśmy nowy element bezpieczeństwa i weryfikacji podczas logowania do serwisu CA24 eBank. Przeczytaj więcej o przeglądarkach zaufanych na
                                    <a href='https://www.credit-agricole.pl/zaufane-przegladarki' className='text-[#007e90]'>www.credit-agricole.pl/zaufane-przegladarki</a>
                                </p>
                            </div>
                            <div className='shrink-0 grow-0'>
                                <img alt='BELL'
                                    src={bell}
                                    className='mx-6 my-2'/>
                            </div>
                        </div>
                    ) : (
                        <div className='w-1/2 hidden lg:block  flex items-center'>
                            <div className='grow-0'>
                                <h2 className='text-white text-2xl font-semibold mb-2'>Zarządzaj swoją firmą. Po swojemu.</h2>
                                <p className='text-sm text-white font-normal'>
                                    Wygodne rozliczania z parterami za granicą. Karty walutowe EUR i USD. Ty opiekujesz się klientami, my pomagamy w formalnościach.
                                </p>
                                <a className='text-[#9c0] text-sm font-semibold'>Dowiedz się więcej o nowym sposobie logowania</a>
                            </div>
                            <div className='shrink-0 grow-0'>
                                <div className='w-[366px] w-[291px] relative'>
                                    <div className='circleBig'></div>
                                    <div className='circleSmall-1'></div>
                                    <div className='circleSmall-2'></div>
                                    <div className='circleSmall-3'></div>
                                    <div className='circleSmall-green-1'></div>
                                    <div className='circleSmall-green-2'>
                                        <img src={advert_car}
                                            alt='CAR'
                                            className='w-full h-full scale-75 translate-x-[5px]'/>
                                    </div>
                                    <div className='circleSmall-green-big'>
                                        <div className='circleSmall-green-3'>
                                            <img src={eco}
                                                alt='ECO'
                                                className='w-full h-full scale-[0.6] translate-x-[5px] -translate-y-[10px]'/>
                                        </div>
                                        <img src={eco_case}
                                            alt='ECO_CASE'
                                            className='ecoCase'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } </div>
            </div>
        </div>
    )
}

export default Main
