const INITIAL_STATE = {
    article: []
}

function articleReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "LOADARTICLES": {
            return {
                ...state,
                article: action.payload
            }
        }
        case "ADDARTICLE": {
            const newArr = [...state.article];
            newArr.unshift(action.payload);
            return {
                ...state,
                article: newArr
            }
        }
    }

    return state;
}

export default articleReducer


export const getArticles = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: 'LOADARTICLES',
                payload: data
            })
        })
}