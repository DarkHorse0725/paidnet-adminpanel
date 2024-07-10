"use client"

import Notification from "@/components/Notification";
import { authService } from "@/services/api.service";
import { User } from "@/types";
import { useState, createContext } from "react";
import toast from "react-hot-toast";

interface AuthContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: Function;
  login: Function;
  authUser: User | undefined;
  // logout: Function;
  // setAuthUser: Function;
}

interface PageContextProps {
  pageName: string;
  setPageName: (name: string) => void;
}


export const AuthContext = createContext({} as AuthContextProps);
export const PageContext = createContext({} as PageContextProps);

const Provider = ({ children }: { children: React.ReactNode }) => {
  const token = typeof window !== 'undefined' ? (localStorage ? (JSON.parse((localStorage as any).getItem('access_token') as string)) : null) : null;
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [authUser, setAuthUser] = useState<User>();
  const [pageName, setPageName] = useState('');

  const login = async (email: string, password: string) => {
    try {
      if (typeof window === 'undefined') return;
      const { access_token, user } = await authService.login(email, password);
      if (user.role !== 'admin') return;
      localStorage.setItem('access_token', JSON.stringify(access_token));
      setIsAuthenticated(true);
      setAuthUser(user);
      toast.custom((t: any) => (
        <Notification type="success" show={t.visible} message={"Signed in successfully"} />
      ));
    } catch (e: any) {
      setIsAuthenticated(false);
      if (!!e?.response?.data.message) {
        toast.custom((t: any) => (
          <Notification type="danger" show={t.visible} message={e.response.data.message} />
        ));
      } else {
        toast.custom((t: any) => (
          <Notification type="danger" show={t.visible} message={"Something is wrong"} />
        ));
      }
      console.log(e)
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, authUser, login }}
    >
      <PageContext.Provider value={{pageName, setPageName}}>
        {children}
      </PageContext.Provider>
    </AuthContext.Provider>
  )

}

export default Provider;