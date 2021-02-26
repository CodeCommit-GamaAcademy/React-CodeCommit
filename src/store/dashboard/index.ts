import { Reducer } from "redux";
import { DashboardActions, DashboardData, Screen } from "./types";

const INITIAL_STATE: DashboardData = {
    current_screen: 'Transações'
}

const reducer: Reducer<DashboardData> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case DashboardActions.CHANGE_SCREEN:
            const screenToChange = action.payload as Screen;

            return { current_screen: screenToChange };

        default:
            return state;
    }
}

export default reducer;