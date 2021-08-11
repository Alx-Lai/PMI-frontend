import '../App.css'
import './MainPage.css'
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
        if (x>49 && x<88 && y>25 && y<29) console.log("疫情近況")
        else if (x>16 && x<55 && y>41 && y<45) console.log("醫療量能")
        else if (x>28 && x<43 && y>64 && y<66) console.log("疫苗分類")
        else if (x>28 && x<50 && y>=67 && y<=68) console.log("Q & A")
        else if (x>28 && x<43 && y>=70 && y<=71) console.log("文獻資料")
        else if (x>52 && x<83 && y>70 && y<75) console.log("關於我們")
        else if (x>82 && x<98 && y>67 && y<74) console.log("關於我們")
        else setSelect(false)
    }

    return (
        <>
            <div className='bed' hidden={scroll<0.9}>
                <h2 className='bed-title1'>病床資訊</h2>
                <input className='bed-input' placeholder='醫院名稱'></input>
                <h2 className='bed-title2'>點擊區域查看分區病床資訊</h2>
            </div>
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