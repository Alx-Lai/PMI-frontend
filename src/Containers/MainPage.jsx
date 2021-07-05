import '../App.css'
import logo from '../Images/logo.png'
import menu from '../Images/menu.png'
import { useEffect, useState } from 'react'

const MainPage = () => {
    const [select, setSelect] = useState(false);
    let offsetStart = 0, offsetEnd = 0;
    let scroll;
    window.addEventListener('scroll', () => {
        scroll = (window.pageYOffset - offsetStart) / (document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight)
        console.log('scroll:', scroll)
        document.documentElement.style.setProperty('--scroll', scroll)
    }, false);
    const handleClick = () => {
        if (scroll > 0.95) {
            setSelect(true)
        }
        // scroll turns to undefined after this, dunno why
    }
    const handleClickMenu = () => {
        setSelect(false)
    }

    return (
        <>
            {select ?
                <img src={menu} alt='menu' className='menu' onClick={handleClickMenu} />
                :
                <img src={logo} alt='logo' className='logo' onClick={handleClick} />
            }
            <div className='tw-wrap'>
            </div>

        </>
    )
}

export default MainPage;