import { actionPost} from '../actions/actionPost'

const initState = {
  isLoading: false,
  error: false,
    pokemon: {
        id: 0,
        name: '',
        date: '',
    },

};

const postReducer = (state = initState, action) => {
    switch(action.type) {
        case actionPost.POST_IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case actionPost.POST_HAS_ERROR:
            return {
                error: true,
                isLoading: false
            }
        case actionPost.POST_LOADING_SUCCESS:
            return {
                ...state,
                pokemon: {
                    id: action.pokemon.id,
                    name: action.pokemon.name,
                    date: (action.pokemon.caught.length !== 0) ? 
                    action.pokemon.caught[0].date : ''
                },
                isLoading: false
            }
        default:
            return state;
    }
}

export default postReducer;