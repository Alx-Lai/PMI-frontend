import "./Pendamic.css"

export default function Pandemic() {
    const caseForeign = 2, caseDomestic = 8, caseTotal = 15862, deathToday = 0, deathTotal = 821
    const vaccinatedToday = 64293, vaccinatedTotal = 9824837, vaccinatedPercent = 39.04
    const vacGold = "連江縣", vacSilver = "澎湖縣", vacBronze = "台北市"
    
    return (
        <div id='wrap'>
            <div class='sec'>
                <h3>全台今日新增確診</h3>
                <h2 class='pendamic-item'>境外: +{caseForeign}</h2>
                <h2 class='pendamic-item'>境內: +{caseDomestic}</h2>
            </div>
            <div class='sec'>
                <h3>累積染疫人數</h3>
                <h2 class='pendamic-item'>{caseTotal}人</h2>
            </div>
            <div class='sec'>
                <h3>今日新增死亡</h3>
                <h2 class='pendamic-item'>+{deathToday}</h2>
                <h3>累積死亡人數</h3>
                <h2 class='pendamic-item'>{deathTotal}人</h2>
            </div>
            <div class='sec'>
                <h3>今日疫苗施打人數</h3>
                <h2 class='pendamic-item'>+{vaccinatedToday}</h2>
                <h3>累積施打人數</h3>
                <h2 class='pendamic-item'>{vaccinatedTotal}人</h2>
            </div>
            <div class='sec'>
                <h3>台灣疫苗施打率</h3>
                <h2 class='pendamic-item'>{vaccinatedPercent}%</h2>
                <h3>施打排行:</h3>
                <h2 class='pendamic-item'>No.1 {vacGold}</h2>
                <h2 class='pendamic-item'>No.2 {vacSilver}</h2>
                <h2 class='pendamic-item'>No.3 {vacBronze}</h2>
            </div>
        </div>
    )
};