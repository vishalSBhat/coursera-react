import * as ActionTypes from './actionTypes';

export const Comments = (state = {
    error: null,
    comments: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {
                ...state, isLoading: false, error: null, comments: action.payload
            }

            case ActionTypes.COMMENTS_FAILED:
                return {
                    ...state, isLoading: false, error: action.payload, comments: []
                }
                case ActionTypes.ADD_COMMENT:
                    var comment = action.payload;
                    return {
                        ...state, comments: state.comments.concat(comment)
                    };

                default:
                    return state;
    }
};