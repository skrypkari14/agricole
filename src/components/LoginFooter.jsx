import React from 'react'
import safe from '../img/ok-200.png'
import secure from '../img/signed-out-200.png'
import vault from '../img/safe-200.png'
import map from '../img/map.png'
import girl from '../img/katie.png'
import Chat from './icons/Chat'

const LoginFooter = () => {
    return (
        <div className='loginFooter dark:border-[#3B4759]'>
            <div className='bg-[#006675] dark:bg-[#333F52] pb-4 containerBank pt-4'>
                <div className='p-5 bg-[#007D8F] dark:bg-[#434E61] rounded-xl'>
                    <h4 className='text-white font-semibold text-xl'>Centrum Bezpieczeństwa</h4>
                    <div className='flex items-center justify-between gap-5 mt-5 flex-col md:flex-row'>
                        <a href='#' className='footerCard bg-[#006675] dark:bg-[#3A4455] dark:hover:bg-[#4D576A] p-4 flex w-full flex-nowrap rounded-xl hover:bg-[#058699] items-center'>
                            <img src={safe}
                                alt='safe'/>
                            <p className='font-semibold text-sm text-white ml-4'>Dowiedz się, jak wspólnie dbamy o bezpieczeństwo</p>
                        </a>
                        <a href='#' className='footerCard bg-[#006675] dark:bg-[#3A4455] dark:hover:bg-[#4D576A] p-4 flex w-full flex-nowrap rounded-xl hover:bg-[#058699] items-center'>
                            <img src={secure}
                                alt='safe'/>
                            <p className='font-semibold text-sm text-white ml-4'>Korzystanie z CA24 eBank - bezpieczeństwo przede wszystkim</p>
                        </a>
                        <a href='#' className='footerCard bg-[#006675] dark:bg-[#3A4455] dark:hover:bg-[#4D576A] p-4 flex w-full flex-nowrap rounded-xl hover:bg-[#058699] items-center'>
                            <img src={vault}
                                alt='safe'/>
                            <p className='font-semibold text-sm text-white ml-4'>Czy wiesz jak rozpoznać znane oszustwa?</p>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row flex-wrap items-start -mx-3'>
                    <div className='w-full lg:w-1/2 lg:max-w-1/2 px-3 mt-7'>
                        <div className='bg-[#007485] dark:bg-[#404A5C] w-full h-full p-6 rounded-xl grid grid-cols-2 firstCard gap-8'>
                            <div className='col-span-2'>
                                <h4 className='font-semibold text-white text-xl mb-2'>Placówki i bankomaty</h4>
                                <p className='text-sm text-white'>Znajdź swoją najbliższą placówkę, bankomat i wpłatomat</p>
                            </div>
                            <img src={map}
                                className='rounded-xl col-span-2 cardImg'/>
                            <div className='max-w-[160px] col-span-2'>
                                <a href='https://www.credit-agricole.pl/kontakt/placowki-i-bankomaty' className='flex footerBtn items-center justify-center bg-[#99cc00] rounded-xl text-sm font-semibold min-w-9 min-h-9 hover:bg-[#C2E066] transition-all'>Wyszukaj na mapie</a>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 lg:max-w-1/2 px-3 mt-7'>
                        <div className='bg-[#007485] dark:bg-[#404A5C] w-full h-full p-6 rounded-xl relative secondCard'>
                            <h4 className='font-semibold text-white text-xl mb-2'>Infolinia</h4>
                            <h4 className='text-white font-semibold text-[1.75rem] mb-4'>19 019</h4>
                            <p className='text-white text-sm'>Połączenia zagraniczne</p>
                            <h4 className='font-semibold text-white text-xl mb-4'>+48 71 35 49 009</h4>
                            <div className='max-w-[160px]'>
                                <a href='https://www.credit-agricole.pl/kontakt/czat' className='flex footerBtn items-center justify-center bg-[#99cc00] rounded-xl text-sm font-semibold min-w-9 min-h-9 hover:bg-[#C2E066] transition-all'>
                                    <Chat/>
                                    <span>Rozpocznij czat</span>
                                </a>
                            </div>
                            <img className='absolute max-w-[17.875rem] max-h-[15rem] bottom-0 right-0'
                                src={girl}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginFooter
