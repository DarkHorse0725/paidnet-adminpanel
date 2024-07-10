"use client"
import { PageContext } from "@/hooks/provider";
import { FC, useContext } from "react";


interface Props {}

const Header:FC<Props> = () => {
  const { pageName } = useContext(PageContext);
  return (
    <div className="h-[50px] bg-paper rounded-xl">
      <div className="container flex items-center gap-4 h-full">
        <div className="text-xl font-semibold text-primary">{ pageName }</div>
      </div>
    </div>
  );
}

export default Header;