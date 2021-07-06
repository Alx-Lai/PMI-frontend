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

    const handleClickMenu = (e) => {
        let x = e.clientX, y = e.clientY
        if (x>983 && x<1047 && y>126 && y<148) console.log("確診資訊")
        else if (x>932 && x<996 && y>174 && y<195) console.log("死亡資訊")
        else if (x>913 && x<974 && y>239 && y<259) console.log("醫療量能")
        else if (x>929 && x<992 && y>308 && y<328) console.log("疫苗資訊")
        else if (x>991 && x<1055 && y>364 && y<383) console.log("關於我們")
        else setSelect(false)
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