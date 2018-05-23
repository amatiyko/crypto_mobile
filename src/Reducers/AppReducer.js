import { SHOW_MORE } from './../utils/ActionTypes';
const inititalState = {
    itemsToShow: 10
};

export default function(state=inititalState, action) {
    switch (action.type) {
        case SHOW_MORE:
            return Object.assign({}, state, {itemsToShow: state.itemsToShow+10});
        default:
            return state
    
    }
}