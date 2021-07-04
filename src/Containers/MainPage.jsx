import '../App.css'
import logo from '../Images/logo.png'
import taiwan from '../Images/taiwan.png'

const MainPage = () => {
    return(
        <>
        <img src={logo} alt='logo' className='logo'/>
        <div className='tw-wrap'>
        {//<img src={taiwan} alt='taiwan' className='taiwan'/>
        }
        </div>
        </>
    )
}

export default MainPage;