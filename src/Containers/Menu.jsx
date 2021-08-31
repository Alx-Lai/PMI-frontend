import menu from '../Images/menu.png'
import './Menu.css'

export default function Menu({ hidden = false }) {

  const handleClickMenu = (e) => {
    let x = Math.round((e.clientX - e.target.offsetLeft) / e.target.clientWidth * 100)
    let y = Math.round((e.clientY - e.target.offsetTop) / e.target.clientHeight * 100)
    if (x > 49 && x < 88 && y > 25 && y < 29) window.location.href = "pendamic"
    else if (x > 16 && x < 55 && y > 41 && y < 45) window.location.href = "hospitals"
    else if (x > 28 && x < 43 && y > 64 && y < 66) console.log("疫苗分類")
    else if (x > 28 && x < 50 && y >= 67 && y <= 68) console.log("Q & A")
    else if (x > 28 && x < 43 && y >= 70 && y <= 71) console.log("文獻資料")
    else if (x > 52 && x < 83 && y > 70 && y < 75) window.location.href = "aboutus"
    else if (x > 82 && x < 98 && y > 67 && y < 74) window.location.href = "aboutus"
    else window.location.href = "/"
  }

  return (
    <img src={menu} alt='menu' className='menu' onClick={handleClickMenu} hidden={hidden} />
  )
};