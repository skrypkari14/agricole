import React from 'react'

const Case = ({color}) => {
    return (
        <svg aria-hidden="true" focusable="false" width="24" height="24" className='fill-none' style={{stroke: color}}>
            <use href="#case">
                <symbol id="case">
                    <path d="M4 10.1619C4 9.11463 4.849 8.26562 5.8963 8.26562H18.1037C19.151 8.26562 20 9.11463 20 10.1619V17.036C20 18.0833 19.151 18.9323 18.1037 18.9323H5.8963C4.849 18.9323 4 18.0833 4 17.036V10.1619Z" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M15.7323 8.26641V6.13307C15.7323 5.85018 15.6199 5.57886 15.4199 5.37883C15.2198 5.17879 14.9485 5.06641 14.6656 5.06641H9.33229C9.04939 5.06641 8.77808 5.17879 8.57804 5.37883C8.37801 5.57886 8.26562 5.85018 8.26562 6.13307V8.26641" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                </symbol>
            </use>
        </svg>
    )
}

export default Case
