import React, { createContext, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";

export const AutheContext = createContext<IContext>({} as IContext)

export const AutheProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>()

    async function authenticate (email: string, pasword: string) {

    }

    function logout () {

    }

    return (
        <AutheContext.Provider value={{...user, authenticate, logout}}>
            { children }
        </AutheContext.Provider>
    )
}