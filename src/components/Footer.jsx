import React from 'react'

const Footer = () => {
    return (
        <footer className='pt-5 bg-[#006675] dark:bg-[#333F52] containerBank'>
            <div className='text-white text-[1rem] pt-[5px] pb-2 flex gap-5 border-b border-[#187380] dark:border-[#455061]'>
                <p>Infolinia</p>
                <a href='tel:19019' className='text-sm font-semibold hover:underline'>19 019</a>
                <a href='tel:+49713549009' className='text-sm font-semibold hover:underline'>+48 71 35 49 009</a>
            </div>
            <div className='pt-[22px] border-b border-[#187380] dark:border-[#455061]'>
                <div className='flex'>
                    <ul class="block columns-1 lg:columns-4">
                        <li className='mr-[100px] text-sm text-white hover:underline pb-[22px] font-light'>
                            <a href="javascript:void(0);">
                                <span>Bezpieczeństwo</span>
                            </a>
                        </li>
                        <li className='mr-[100px] text-sm text-white hover:underline pb-[22px] font-light'>
                            <a href="javascript:void(0);">
                                <span>Polityka Cookies</span>
                            </a>
                        </li>
                        <li className='mr-[100px] text-sm text-white hover:underline pb-[22px] font-light'>
                            <a href="javascript:void(0);">
                                <span>Serwis informacyjny</span>
                            </a>
                        </li>
                        <li className='mr-[100px] text-sm text-white hover:underline pb-[22px] font-light'>
                            <a href="javascript:void(0);">
                                <span>Placówki i bankomaty</span>
                            </a>
                        </li>
                        <li className='mr-[100px] text-sm text-white hover:underline pb-[22px] font-light'>
                            <a href="javascript:void(0);">
                                <span>Koszt przewalutowania</span>
                            </a>
                        </li>
                        <li className='mr-[100px] text-sm text-white hover:underline pb-[22px] font-light'>
                            <a href="javascript:void(0);">
                                <span>Dokumenty</span>
                            </a>
                        </li>
                        <li className='mr-[100px] text-sm text-white hover:underline pb-[22px] font-light'>
                            <a href="javascript:void(0);">
                                <span>Opłaty i prowizje</span>
                            </a>
                        </li>
                        <li className='mr-[100px] text-sm text-white hover:underline pb-[22px] font-light'>
                            <a href="javascript:void(0);">
                                <span>Oprocentowanie</span>
                            </a>
                        </li>
                        <li className='mr-[100px] text-sm text-white hover:underline pb-[22px] font-light'>
                            <a href="javascript:void(0);">
                                <span>Kursy walut</span>
                            </a>
                        </li>
                        <li className='mr-[100px] text-sm text-white hover:underline pb-[22px] font-light'>
                            <a href="javascript:void(0);">
                                <span>Notowania funduszy</span>
                            </a>
                        </li>
                        <li className='mr-[100px] text-sm text-white hover:underline pb-[22px] font-light'>
                            <a href="javascript:void(0);">
                                <span>Polityka prywatności</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className='py-5 text-xs text-white'>© 2023 Credit Agricole Bank Polska S.A. Wszelkie prawa zastrzeżone.</p>
        </footer>
    )
}

export default Footer
