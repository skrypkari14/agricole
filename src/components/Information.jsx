import React from 'react'
import WhiteArrowDown from './icons/WhiteArrowDown'
import RedArrowDown from './icons/RedArrowDown'

const Information = () => {
    return (
        <div className='containerBank'>
            <div className='bg-white rounded-t-xl px-7 py-2 flex items-center justify-between gap-4'>
                <span className='h-6 min-w-6 bg-[#C1221F] text-white text-center rounded-full text-sm'>
                    !
                </span>
                <p className='text-[#C1221F] font-semibold text-sm min-h-9 text-center flex items-center w-full'>Uważaj: oszuści podają się za pracowników banku</p>
                <div className='flex cursor-pointer min-w-[80px] ml-4'>
                    <p className='text-[#C1221F] font-semibold text-sm hover:underline'>Rozwiń</p>
                    <RedArrowDown/>
                </div>
            </div>
            <div className='bg-white'> 
                <div className='bg-[#006675] dark:bg-[#333F52] rounded-t-xl px-7 py-2 flex items-center justify-between gap-4'>
                    <span className='h-6 min-w-6 bg-[#99cc00] text-black text-center rounded-full text-sm'>
                        !
                    </span>
                    <p className='text-white font-semibold text-sm min-h-9 text-center flex items-center w-full'>Zobacz, co możesz samodzielnie załatwić w CA24 eBank</p>
                    <div className='flex cursor-pointer min-w-[80px] ml-4'>
                        <p className='text-white font-semibold text-sm hover:underline'>Rozwiń</p>
                        <WhiteArrowDown/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information
