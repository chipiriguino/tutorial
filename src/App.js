import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav"


import Home from './components/Home';
import BesoPrimer from './components/BesoPrimer';
import BesoLengua from './components/BesoLengua';
import TipsBeso from './components/TipsBeso';
import BesoMano from './components/BesoMano';
import BesoAmor from './components/BesoAmor';
import BesoBraquets from './components/BesoBraquets';
import BesoPiercing from './components/BesoPiercing';


const App = () => {
  return (
    <Router>
<Nav/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/primerbeso" element={<BesoPrimer/>}/>
          <Route exact path="/besoconlengua" element={<BesoLengua/>}/>
          <Route exact path="/tipsbesarcomoprofesional" element={<TipsBeso/>}/>
          <Route exact path="/tutorialbesarconlamano" element={<BesoMano/>}/>
          <Route exact path="/besosparaenamorar" element={<BesoAmor/>}/>
          <Route exact path="/besarconaparato" element={<BesoBraquets/>}/>
          <Route exact path="/besarconpiercing" element={<BesoPiercing/>}/>
          {/* <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        </Routes>

    </Router>
  );
}

export default App;