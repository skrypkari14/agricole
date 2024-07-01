import React from 'react'

const User = ({color}) => {
    return (
        <svg aria-hidden="true" focusable="false" width="24" height="24" className='fill-none' style={{stroke: color}}>
            <use href="#user">
                <svg>
                    <symbol id="user" viewBox="0 0 24 24">
                      <path d="M8.23047 7.69111C8.23047 8.69077 8.62758 9.64949 9.33445 10.3564C10.0413 11.0632 11 11.4603 11.9997 11.4603C12.9994 11.4603 13.9581 11.0632 14.6649 10.3564C15.3718 9.64949 15.7689 8.69077 15.7689 7.69111C15.7689 6.69144 15.3718 5.73273 14.6649 5.02586C13.9581 4.31899 12.9994 3.92188 11.9997 3.92188C11 3.92188 10.0413 4.31899 9.33445 5.02586C8.62758 5.73273 8.23047 6.69144 8.23047 7.69111V7.69111Z" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M5 20.0742C5 18.2177 5.7375 16.4372 7.05025 15.1245C8.36301 13.8117 10.1435 13.0742 12 13.0742C13.8565 13.0742 15.637 13.8117 16.9497 15.1245C18.2625 16.4372 19 18.2177 19 20.0742" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>                   
                    </symbol>
                </svg>
            </use>
        </svg>
    )
}

export default User
