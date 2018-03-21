import React from 'react';
import Header from './menu/Header';
import ChangeOfDolars from './changeBox/ChangeOfDolars';
import InformationData from './confirmationData/InformationData'
import MainTransfer from './transfer/mainTransfer'

const App = () => (
    <div>
        <Header/>
        <ChangeOfDolars/>
        <InformationData/>
        <MainTransfer/>
    </div>
)

export default App