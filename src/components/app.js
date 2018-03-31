import React from 'react';
import Header from './header/Header';
import InformationData from './confirmationData/InformationData'
import MainTransfer from './transfer/MainTransfer';
import Footer from './footer/Footer';
// import { connect } from 'react-redux';
// import { navigationTo } from '../actions/actions';
// import Navigation from './Navigation';
import Main from './main/Main';

const App = ({ actualPage, navigateTo }) => (
  <div>
    <Header/>
    <Main/>
    {/* <Navigation actualPage={ actualPage } navigateTo={navigateTo}/> */}
    <Footer className="mb-5"/>
  </div>
)

export default App;