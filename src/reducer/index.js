const defaultState = {
    books: [],
    loading: false,
    error: false,
    cardites: [{
        
    }]
}

const reducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'BOOKS_REQUESTED':
            return {
                ...state,
                loading: true,
                error: false,
            };
        case 'BOOKS_LOADED':
            return {
                ...state,
                books: action.payload,
                error: false,
                loading: false,
            };
        case 'BOOKS_ERROR':
            return {
                ...state,
                books: [],
                error: true,
                loading: false,
            };
        default:
            return state;
    }
}

export default reducer;