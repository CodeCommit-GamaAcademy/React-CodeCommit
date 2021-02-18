import { FilteredUser } from "../../types/user";

const getInitialState = () => {
    const localToken = localStorage.getItem('@token_user');
    const localUserBodyString = localStorage.getItem('@user_body');

    if ( !localToken || !localUserBodyString ) return null;

    return JSON.parse(localUserBodyString)
}

const INITIAL_STATE: FilteredUser | null = getInitialState();

export default INITIAL_STATE;