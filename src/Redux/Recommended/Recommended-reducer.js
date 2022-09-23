import { recomendados } from "../../Data/Recomendados";

const INITIAL_STATE = {
    recommended: recomendados
}

const recommendedReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default recommendedReducer