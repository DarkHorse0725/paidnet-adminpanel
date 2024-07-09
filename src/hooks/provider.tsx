"use client"

import { User } from "@/types";
import { useState,  createContext } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: Function;
  // login: Function;
  authUser: User | undefined;
  // logout: Function;
  // setAuthUser: Function;
}


export const AuthContext = createContext({} as AuthContextProps);

const Provider = ({ children }: { children: React.ReactNode }) => {
  const token = typeof window !== 'undefined' ? (localStorage ? (JSON.parse((localStorage as any).getItem('access_token') as string)) : null) : null;
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [authUser, setAuthUser] = useState<User>();

  const login = async (email: string, password: string) => {
    try {

    } catch(e) {
      console.log(e);
    }
  }

  return (
    <AuthContext.Provider
      value ={{isAuthenticated, setIsAuthenticated, authUser}}
    >
      {children}
    </AuthContext.Provider>
  )

}

export default Provider;