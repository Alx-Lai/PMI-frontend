import './App.css';
import MainPage from './Containers/MainPage';

function App() {
  let offsetStart = 0, offsetEnd = 0;
    window.addEventListener('scroll', ()=>{
        document.documentElement.style.setProperty('--scroll',
        (window.pageYOffset - offsetStart) / (document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight))
    }, false);
  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;
