import React from 'react';
import Header from './menu/Header';
import ChangeOfDolars from './changeBox/ChangeOfDolars';
import InformationData from './confirmationData/InformationData'
import MainTransfer from './transfer/MainTransfer';
import Footer from './footer/Footer';
import { connect } from 'react-redux';
import { navigationTo } from '../actions/actions';
import Navigation from './Navigation';
import AllOperations from './operations/AllOperations';

const App = ({ actualPage, navigateTo }) => (
    <div>
        <Header/>
        <AllOperations/>
        <Navigation actualPage={ actualPage } navigateTo={navigateTo}/>
        <Footer className="mb-5"/>
    </div>
)

export default App;