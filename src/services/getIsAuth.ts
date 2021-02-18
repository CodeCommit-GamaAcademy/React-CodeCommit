// Estratégia para ver se o token ainda é valido // TODO
const validateToken = () => true;


// Verificação
const getIsAuth = () => {
    const localToken = localStorage.getItem('@token_user');
    
    if ( localToken && validateToken() ) return true;
    
    return false;
}

export default getIsAuth;