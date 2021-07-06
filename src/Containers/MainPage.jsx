import '../App.css'
import logo from '../Images/logo.png'
import menu from '../Images/menu.png'
import { useState } from 'react'

const MainPage = () => {
    const [select, setSelect] = useState(false);
    const [scroll, setScroll] = useState(0)
    let offsetStart = 0, offsetEnd = 0;

    window.addEventListener('scroll', () => {
        setScroll((window.pageYOffset - offsetStart) / (document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight))
        document.documentElement.style.setProperty('--scroll', scroll)
    }, false);

    const handleClick = () => {
        if (scroll > 0.95) {
            setSelect(true)
        }
    }

    const handleClickMenu = (e) => {
        let x = Math.round((e.clientX - e.target.offsetLeft) / e.target.clientWidth * 100)
        let y = Math.round((e.clientY - e.target.offsetTop) / e.target.clientHeight * 100)
        if (x>49 && x<77 && y>25 && y<29) console.log("確診資訊")
        else if (x>26 && x<54 && y>33 && y<38) console.log("死亡資訊")
        else if (x>16 && x<45 && y>45 && y<51) console.log("醫療量能")
        else if (x>24 && x<52 && y>59 && y<64) console.log("疫苗資訊")
        else if (x>53 && x<81 && y>69 && y<75) console.log("關於我們")
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