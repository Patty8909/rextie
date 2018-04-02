const PURCHASE = 3.2000;  
const SALE = 3.2480;

// const initialState = {
//   name: 'Patria Urco',
//   typeDoc: 'DNI',
//   NumDoc: '43496820',
//   email: 'paty@gmail.com',
//   birthdate: '24 de Marzo de 1989',
//   mobile: '953329186',
//   ubigeo: '112345',
//   ocupacion: 'Estudiante',
// }

// const reducer = (state = initState, action) => {
//   return state;
// }


const initialStatePayment = {
  change: PURCHASE,
  type: 'COMPRA',
  typeCurrency: 'SOLES',
  exchangeRate: 'USD',
  messages: '',
}


const reducer = (state = initialStatePayment, action) => {
  switch (action.type) {
    case 'SELECT_TYPE_PURCHASE': {
      return {
        ...state,
        algo: action.algo,
      }
    }
    case 'SELECT_TYPE_SALE': {
      return {
        ...state,
        algo: action.algo,
      }
    }
    case 'CONVERTED_PURCHASE': {
      return {
        ...state,
        algo: action.algo,
      }
    }
    case 'CONVERTED_SALE': {
      return {
        ...state,
        algo: action.algo,
      }
    }
    default: return state; 
  } 
}

export default reducer;