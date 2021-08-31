import { useState } from 'react'
import '../App.css'
import './MainPage.css'
import logo from '../Images/logo.png'
import taiwan from '../Images/taiwan.png'
import Menu from './Menu'

const MainPage = ({ scroll }) => {
    const [clicked, setClicked] = useState(false)

    const clickLogo = () => {
        setClicked(true)
    }

    return (
        <div className='mainpage'>
            <Menu hidden={!clicked} />
            <div className='bed' hidden={scroll < 0.9}>
                <h2 className='bed-title1'>病床資訊</h2>
                <input className='bed-input' placeholder='醫院名稱'></input>
                <h2 className='bed-title2'>點擊區域查看分區病床資訊</h2>
            </div>
            <img src={logo} alt='logo' className='logo' hidden={clicked} onClick={clickLogo} />
            <img src={taiwan} alt='taiwan' id='taiwan' />
        </div>
    )
}

export default MainPage;