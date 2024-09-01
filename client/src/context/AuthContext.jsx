import { createContext, useEffect, useReducer } from "react";
export const AuthContext = createContext({
    user: null,
    dispatch: function () {},
});

function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload };
        case 'LOGOUT':
            return { user: null };
        default:
            console.error(`Unexpected action type: ${action.type}`);
            return state;
    }
}

function AuthProvider({ children  }){
    const [state, dispatch] = useReducer(authReducer, { user: null });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user) {
            dispatch({ type: 'LOGIN', payload: user });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;