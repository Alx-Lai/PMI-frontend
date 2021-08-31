import '../App.css'
import './MainPage.css'
import logo from '../Images/logo.png'
import taiwan from '../Images/taiwan.png'
import Menu from './Menu'

const MainPage = ({ scroll }) => {

    return (
        <div className='mainpage'>
            <Menu />
            <div className='bed' hidden={scroll < 0.9}>
                <h2 className='bed-title1'>病床資訊</h2>
                <input className='bed-input' placeholder='醫院名稱'></input>
                <h2 className='bed-title2'>點擊區域查看分區病床資訊</h2>
            </div>

            <div>
                <img src={logo} alt='logo' className='logo' />
                <img alt='taiwan' id='taiwan' src={taiwan} />
            </div>
        </div>
    )
}

export default MainPage;