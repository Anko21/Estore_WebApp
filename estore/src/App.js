import './App.css';
import TopNav from './Components/TopNav';
import CatNav from './Components/CatNav';
import LandingPage from './Components';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TopNav/>
      <CatNav/>
      <Routes>
        <Route path ="/" Component = {LandingPage}/>
      </Routes>
    </div>
  );
}

export default App;
