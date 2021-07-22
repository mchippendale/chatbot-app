import Chatbot from './components/Chatbot'
import { Switch, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import FoodWaste from './components/FoodWaste';
import Energy from './components/Energy';
import Plastics from './components/Plastics';
import Shopping from './components/Shopping';
import ReduceReuseRecycle from './components/ReduceReuseRecycle';
import Travel from './components/Travel';
// import InfoBar from './components/InfoBar';
import InfoBarHorizontal from './components/InfoBarHorizontal';

import PlaySound from './components/PlaySound'

import './App.css';
import './components/css/Chatbot.css'

function App() {
  return (
    <div className="App layout">
      <section className="section-chatbot-container">
        {/* <InfoBar /> */}
        <InfoBarHorizontal />
        <Chatbot />
      </section>
      <section className="main-info-container">
        <Switch >
          <Route path="/travel">
            <Travel className="main-content-section"/>
          </Route>
          <Route path="/recycle">
            <ReduceReuseRecycle className="main-content-section"/>
          </Route>
          <Route path="/shopping">
            <Shopping className="main-content-section"/>
          </Route>
          <Route path="/plastics">
            <Plastics className="main-content-section"/>
          </Route>
          <Route path="/energy">
            <Energy className="main-content-section"/>
          </Route>
          <Route path="/foodwaste">
            <FoodWaste className="main-content-section"/>
          </Route>
          <Route path="/about">
            <About className="main-content-section"/>
          </Route>
          <Route exact path="/">
            <Home className="main-content-section"/>
          </Route>
       </Switch>
       <footer className="footer-outer-container">
         <div>
            <PlaySound />
         </div>
       </footer>
       </section>
       
    </div>
  );
}

export default App;
