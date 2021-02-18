import { Reducer } from "redux";
import { FilteredUser } from "../../types/user";
import INITIAL_STATE from "./initialState";
import { UserActions } from "./types";

const reducer: Reducer<FilteredUser | null | undefined> = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case UserActions.SET_USER:
            const userPayload = action.payload as FilteredUser;

            return userPayload;

        case UserActions.REMOVE_USER:
            const localToken = localStorage.getItem('@token_user');
            const localUserBody = localStorage.getItem('@user_body');

            if ( localToken || localUserBody ) {
                localStorage.removeItem('@token_user');
                localStorage.removeItem('@user_body');
            }

            window.location.reload();

            return null;

        default: 
            return state;
    }
}

export default reducer;