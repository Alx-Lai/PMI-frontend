import '../App.css'
import './MainPage.css'

const MainPage = ({ scroll }) => {

    return (
        <>
            <div className='bed' hidden={scroll < 0.9}>
                <h2 className='bed-title1'>病床資訊</h2>
                <input className='bed-input' placeholder='醫院名稱'></input>
                <h2 className='bed-title2'>點擊區域查看分區病床資訊</h2>
            </div>

            <div className='tw-wrap'>
            </div>
        </>
    )
}

export default MainPage;