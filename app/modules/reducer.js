import * as t from './constants';

let initialState = { isFetching: true, articles:[], hasError:false, errorMsg: "" };

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.RETRIEVING_HEADLINES:{
            let isFetching = (state.articles.length > 0) ? false : true;

            return {...state, isFetching, hasError:false};
        }

        case t.HEADLINES_AVAILABLE:{
            let { articles } = action.data;

            return {...state, isFetching:false, articles, hasError:false};
        }

        case t.HEADLINES_ERROR:{
            const error = action.error;

            return {...state, isFetching:false, hasError:true, errorMsg:error};
        }

        default:
            return state;

    }
};

export default homeReducer;