import '../App.css'
import logo from '../Images/logo.png'
import { useEffect, useState } from 'react'

const MainPage = () => {
    const [select, setSelect] = useState(false);
    let offsetStart = 0, offsetEnd = 0;
    let scroll;
    window.addEventListener('scroll', ()=>{
        let scroll = (window.pageYOffset - offsetStart) / (document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight)
        document.documentElement.style.setProperty('--scroll',scroll)
    }, false);
    const handleClick = () =>{
        if(scroll > 0.95){
            setSelect(true)
        }
    }
    return(
        <>
        {select ? 
        <></>:
        <img src={logo} alt='logo' className='logo' onClick={handleClick}/>
        }
        <div className='tw-wrap'>
        </div>
        </>
    )
}

export default MainPage;