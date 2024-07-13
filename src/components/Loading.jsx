import React from 'react'

const Loading = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='w-24 h-24 rounded-full bg-white relative drop-shadow-xl flex items-center justify-center'>
                <div class="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Loading
