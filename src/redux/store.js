import { createStore } from "redux";

const reducer = (state, action) => {
    switch(action.type) {
        case 'change-current-user-name':
            return {
                currentUser: {
                    name: action.payload.name
                }
            }
    }
    return state;
}

const initialState = {
    currentUser: {
        name: "John Smith"
    }
}

const store = createStore(reducer, initialState);

export default store;