import './App.css';
import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import MainPage from './Containers/MainPage';
import Pendamic from './Containers/Pendamic'
import Hospitals from './Containers/Hospitals'
import AboutUs from './Containers/AboutUs'

function App() {
  const [scroll, setScroll] = useState(0)
  let offsetStart = 0, offsetEnd = 0;

  window.addEventListener('scroll', () => {
    setScroll((window.pageYOffset - offsetStart) / (document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight))
    document.documentElement.style.setProperty('--scroll', scroll)
  }, false);

  return (
    <div className="App">
      <Switch>
        <Route path='/pendamic' component={Pendamic} />
        <Route path='/hospitals' component={Hospitals} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/' component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
