import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Information from '../components/Information'
import LoginFooter from '../components/LoginFooter'
import Footer from '../components/Footer'

export const Context = React.createContext();

const AuthPage = () => {
    const [selectedTab, setSelectedTab] = React.useState(1);

    return (
        <Context.Provider value={[selectedTab, setSelectedTab]}>
            <div className='bg-[#f2f8f9] dark:bg-[#4D576A] w-full min-h-screen'>
                <Header/>
                <Main/>
                <Information/>
                <LoginFooter/>
                <Footer/>
            </div>
        </Context.Provider>
    )
}

export default AuthPage
