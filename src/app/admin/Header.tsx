"use client"
import { AuthContext, PageContext } from "@/hooks/provider";
import { Button } from "@headlessui/react";
import { FC, useContext } from "react";


interface Props {}

const Header:FC<Props> = () => {
  const { pageName } = useContext(PageContext);

  const { logout } = useContext(AuthContext);

  return (
    <div className="h-[50px] bg-paper rounded-xl">
      <div className="container flex items-center gap-4 h-full">
        <div className="text-xl font-semibold text-primary">{ pageName }</div>
        <div className="flex-1"></div>
        <Button onClick={() => logout()}>Logout</Button>
      </div>
    </div>
  );
}

export default Header;