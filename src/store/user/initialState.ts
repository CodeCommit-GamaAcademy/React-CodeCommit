import { UserData } from "./types";
import jwt from 'jsonwebtoken';

interface TokenPayload {
    sub: string;
    idUsuario: number;
    authorities: string[];
    iat: number;
    exp: number;
}

const getInitialState = (): UserData | null => {
    const localToken = localStorage.getItem('@token_user');

    // Usuário deslogado
    if ( !localToken ) return null;

    // Usuário Logado
    const filteredToken = localToken.split(' ')[1];
    const decodedToken = jwt.decode(filteredToken) as TokenPayload;
    
    const storeData: UserData =  {
        login: decodedToken.sub,
        token: localToken
    }

    return storeData;
}

const INITIAL_STATE: UserData | null = getInitialState();

export default INITIAL_STATE;