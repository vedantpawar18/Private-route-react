const { useState, createContext } = require("react");


export const AuthContext = createContext();

function AuthContextProvider({children}){
    const [state, setState] = useState({
        isAuth:false,
        token:null
    });

    function handleLogin(token){
        setState({
            ...state,
            isAUth:true,
            token:token
        });
    }

    function handleLogout(token){
        setState({
            ...state,
            isAUth:false,
            token:null
        });
    }
    return <AuthContext.Provider value={{state,handleLogout, handleLogin}}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;