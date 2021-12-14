//---------REDUCER---------------//
const initialState = 0;

const counterReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case 'INCREMENT' :
            return state + 1;
        case 'DECREMENT' :
            return state - 1;
        case 'ADDTEN' :
            return state + 10;
        case 'REMOVETEN' :
            return state - 10;
        case 'RESET' :
            return initialState;
        default :
            return state;
    }
};

export default counterReducer;