import React from 'react';
import ChangeOfDolars from './changeBox/ChangeOfDolars';
import InformationData from './confirmationData/InformationData';
import ModalBankAccount from './confirmationData/ModalBankAccount';
import Main from './operations/Main';
import PersonalInformation from './operations/PersonalInformation';
import AllOperations from './operations/AllOperations';
import MainTransfer from './transfer/MainTransfer';

const Navigation = ({ actualPage, navigateTo }) => {
  switch (actualPage) {
    case 'changeofdolars':
      return <ChangeOfDolars/>;
    case 'informationdata':
      return <InformationData/>;
    case 'modalbankAccount':
      return <ModalBankAccount/>;
    case 'main':
      return <Main/>;
    case 'personalinformation':
      return <PersonalInformation/>;
    case 'alloperations':
      return <AllOperations/>;
    case 'maintransfer' :
      return <MainTransfer navigateTo={navigateTo}/>
    default:
      return null
  }
  return null;
};

export default Navigation;