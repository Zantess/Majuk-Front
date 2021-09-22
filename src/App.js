import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import LeaderBoard from './pages/LeaderBoard';
import Contact from './pages/Contact';
import CreatDeck from './pages/CreateDeck';
import DosdeCarte from './pages/DosdeCarte';
import CreateCards from './components/CreateCards';
import Collection from './components/Collection';
import Admin from './pages/Admin';
import Register from './components/Register';
import FetchDeck from './components/FetchDeck';


function App() {
  return (
    
    <Router>
       <Navbar />
       <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/leaderBoard' exact component={LeaderBoard} />
         <Route path='/create' exact component={CreateCards} />
         <Route path='/contact' exact component={Contact} />
         <Route path='/createdeck' exact component={CreatDeck} />
         <Route path='/collection' exact component={Collection} />
         <Route path='/dosdecarte' exact component={DosdeCarte} />
         <Route path='/admin' exact component={Admin} />
         <Route path='/fetchDeck' exact component={FetchDeck} />

       </Switch>

    </Router>
  );
}

export default App;
