import { SHOW_MORE, SHOW_LESS} from './../utils/ActionTypes';

export function ShowMore() {
    return dispatch => dispatch({type: SHOW_MORE});
}
export function ShowLess() {
    return dispatch => dispatch({type: SHOW_LESS});
}