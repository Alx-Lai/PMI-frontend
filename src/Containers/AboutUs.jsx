import "./AboutUs.css";
import logo from "../Images/logo.png"

export default function AboutUs() {
    return (
        <>
            <img src={logo} alt='logo' id='logo-watermark' />
            <h2 class='about-us-h2'>,,</h2>
            <p>
                大家好，我們是PMI防衛隊。
            </p>
            <p>
                新型冠狀病毒的肆虐使全台陷入一片混亂，沒有人知道何時能夠解封，回復到正常的生活。
                在此情況下，本團隊希望藉由整合資料的方式使得群眾能獲取最新且最淺顯易懂的疫情狀況。
            </p>
            <p>
                鑑於台灣前陣子曾經傳出醫療量能瀕臨崩潰的消息，我們希望透過:
                <ol>
                    <li>精確的數字來顯示出目前全台各地病床量</li>
                    <li>整理目前各國以及衛生福利部所公布的資料</li>
                </ol>
                整合出與疫苗及變種病毒相關的資訊。
            </p>
            <p>
                期望透過資訊的整合來釐清大眾們的疑問和破除錯誤的資訊，也使大家更能夠迅速的了解最新的疫情資訊。
            </p>
            <h2 class='about-us-h2' id='tail'>,,</h2>
        </>
    )
};