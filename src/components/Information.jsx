import React, {useState} from 'react'
import WhiteArrowDown from './icons/WhiteArrowDown'
import RedArrowDown from './icons/RedArrowDown'

const Information = () => {

    const [isOpenWhite, setIsOpenWhite] = useState(false);
    const [isOpenRed, setIsOpenRed] = useState(false)

    const toggleCollapsible = () => {
        setIsOpenWhite(!isOpenWhite);
    };

    const toggleCollapsibleRed = () => {
        setIsOpenRed(!isOpenRed)
    }

    return (
        <div className='containerBank'>
            <div className='bg-white rounded-t-xl px-7 py-2 flex flex-col items-center justify-between gap-4'>
                <div className='gridContainer overflow-hidden'>
                    <span className='h-6 min-w-6 bg-[#C1221F] text-white text-center rounded-full text-sm'>
                        !
                    </span>
                    <p className='text-[#C1221F] font-semibold text-sm min-h-9 text-left md:text-center flex items-center w-full'>
                        Uważaj: oszuści podają się za pracowników banku
                    </p>
                    <div></div>
                    <div className={
                        `collaps text-sm ${
                            isOpenWhite ? 'open' : ''
                        }`
                    }>
                        <p className='font-semibold mb-4'>Uważaj na oszustów, którzy przez telefon:</p>
                        <ul className='pt-[40px]'>
                            <li>
                                <strong>podają się za pracowników</strong>
                                banków lub instytucji finansowych
                                <br/>
                                (na telefonie может wyświetлиć się номер, который выглядит как один из номеров bankowych)
                            </li>
                            <li>chcą Cię przestraszyć
                                <strong>zmyśloną historią o podejrzanym przelewie lub kredycie</strong>
                            </li>
                            <li>mogą zapewniać, że współpracują z policją i zależy im, żeby
                                <strong>działać szybko</strong>
                            </li>
                            <li>namawiają do
                                <strong>zainstalowania programu</strong>
                                na smartfonie lub komputerze</li>
                            <li>chcą od Ciebie poufnych informacji</li>
                            <li>nakłaniają do wykonania operacji bankowych, также przekazania pieniędzy na tzw. „bezpieczne konto”, wypłaty gotówki i jej ponownej wpłaty we wpłatomacie</li>
                        </ul>
                        <p className='pt-[30px]'>
                            <strong>Nie daj się złowić. To próba kradzieży Twoich pieniędzy.</strong>
                        </p>
                        <p className='pt-[30px]'>Przestępca zwykle wie, jak się nazywasz. Czasami, żeby się uwiarygodnić, może w trakcie rozmowy lub chwilę przed nią wysłać SMS-a, który wygląda jak wiadomość z banku, albo podać jakieś dodatkowe informacje np. kilka ostatnich cyfr numeru Twojej karty płatniczej.</p>
                        <p className='pt-[30px]'>Oszuści często namawiają też do zainstalowania oprogramowania, które da им możliwość samodzielnego wykonywania operacji на Twoim koncie.</p>
                        <p className='pt-[30px]'>
                            <strong>Niczego nie instaluj, не podawaj poufnych danych, nie wykonuj żadnych operacji.</strong>
                            Najlepiej jak najszybciej się rozłącz. Jeśli chcesz się upewnić, że z Twoim rachunkiem wszystko w porządku, skontaktuj się с nami.
                        </p>
                        <p className='py-[30px]'>Przeczytaj też artykuł на naszym blogu CAsfera i bankuj bezpiecznie
                            <a className='text-[#007e90] hover:underline' href="https://www.casfera.pl/oszustwa-na-pracownika-banku/">https://www.casfera.pl/oszustwa-na-pracownika-banku/</a>
                        </p>
                    </div>
                </div>
                <div className='flex cursor-pointer min-w-[80px] ml-10 md:ml-4 self-start md:translate-y-[10px]'
                    onClick={toggleCollapsible}>
                    <p className='text-[#C1221F] font-semibold text-sm hover:underline'>
                        {
                        isOpenWhite ? 'Zwiń' : 'Rozwiń'
                    } </p>
                    <div className={
                        `${
                            isOpenWhite ? 'rotate-180' : 'rotate-0'
                        }`
                    }>
                        <RedArrowDown/>
                    </div>
                </div>
            </div>
            <div className='bg-white'>
                <div className='bg-[#006675] dark:bg-[#333F52] rounded-t-xl px-7 py-2 flex flex-col md:flex-row items-center justify-between gap-4'>
                    <div className='gridContainer overflow-hidden'>
                        <span className='h-6 min-w-6 bg-[#99cc00] text-black text-center rounded-full text-sm'>
                            !
                        </span>
                        <p className='text-white font-semibold text-sm min-h-9 text-left md:text-center flex items-center w-full'>Zobacz, co możesz samodzielnie załatwić w CA24 eBank</p>
                        <div></div>
                        <div className={
                            `collaps text-sm ${
                                isOpenRed ? 'open' : ''
                            }`
                        }>
                            <p className='pb-[40px] text-white'>Chcesz zlecić przelew, zmienić limity transakcji, metodę autoryzacji, a może odblokować dostęp do aplikacji? Zobacz, jak łatwo możesz to zrobić w CA24 eBank. Przygotowaliśmy dla Ciebie podpowiedzi w sekcji
                                <a href='#' className='text-[#007e90]'> Pytania i odpowiedzi</a>.</p>
                        </div>
                    </div>
                    <div className='flex cursor-pointer min-w-[80px] ml-10 md:ml-4 self-start md:translate-y-[10px]'
                        onClick={
                            () => {
                                toggleCollapsibleRed()
                            }
                    }>
                        <p className='text-white font-semibold text-sm hover:underline'>
                            {
                            isOpenRed ? 'Zwiń' : 'Rozwiń'
                        } </p>
                        <div className={
                            `${
                                isOpenRed ? 'rotate-180' : ''
                            }`
                        }>
                            <WhiteArrowDown/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information
