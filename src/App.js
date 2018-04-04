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
import InformationData from './components/confirmationData/InformationData';
import RextieTransferToClient from './components/transfer/RextieTransferToClient';
import TransferYourOnlineBank from "./components/transfer/TransferYourOnlineBank";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalBankAccount from "./components/confirmationData/ModalBankAccount";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <AllOperations/>
            <Route exact path="/" component={ChangeOfDolars}/>
            <Route path="/informationdata" component={InformationData}/>
            <Route path="/rextietransfer" component={RextieTransferToClient}/>
            <Route path="/transferyour" component={TransferYourOnlineBank}/>
            <Route path="/bankaccount" component={ModalBankAccount}/>
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