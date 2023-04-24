const initialState = {
    ids: [],
    entities: {},
}

export default function(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            const { id, content } = action.payload;
            return {
                ...state,
                ids: [...state.ids, id],
                entities: {
                    ...state.entities,
                    [id]: {
                        id: id,
                        content,
                        completed: false
                    }
                }
            }
        case "TOGGLE_TODO": {
            const {id} = action.payload;
            
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [id]: {
                        ...state.entities[id],
                        completed: !state.entities[id].completed,
                    }
                }
            }
        }
        default:
            return state;
    }
    
}