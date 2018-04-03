import React, { Component } from 'react';
// import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import ChangeOfDolars from './components/main/details/changeOfDolarsOnline/ChangeOfDolars';
import AllOperations from './components/main/menu/AllOperations';
import PersonalInformation from './components/main/details/PersonalInformation';
import PersonalBankAccount from './components/main/details/PersonalBankAccount';
import ThirdPartyBankAccount from './components/main/details/ThirdPartyBankAccount';
import OperatingHistory from './components/main/details/OperatingHistory';
import RextieBanking from './components/main/details/RextieBanking';

import InformationData from './components/confirmationData/InformationData'
import MainTransfer from './components/transfer/MainTransfer';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <AllOperations/>
            <Route exact path="/" component={ChangeOfDolars}/>
            <Route path="/information" component={PersonalInformation}/>
            <Route path="/personalbankaccount" component={PersonalBankAccount}/>
            <Route path="/thirdbank" component={ThirdPartyBankAccount}/>
            <Route path="/history" component={OperatingHistory}/>
            <Route path="/rextiebanking" component={RextieBanking}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;