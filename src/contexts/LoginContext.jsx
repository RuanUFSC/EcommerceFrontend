import { createContext, useState, useEffect } from 'react'

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {

    const [ logado, setLogado ]  = useState(false);

    const login = () => {
        localStorage.setItem('logado', 'true');
        setLogado(true);
    }
    const logout = () => {
        localStorage.removeItem('logado');
        setLogado(false);
    }

    // // Verificar se o usuário está logado ao montar o componente
    useEffect(() => {
        const verificaLogado = localStorage.getItem('logado');
        if (verificaLogado) {
            setLogado(true);
        }
    }, []);

    return (
        <LoginContext.Provider value={{logado, login, logout }}>
            {children}
        </LoginContext.Provider>
    )

}
