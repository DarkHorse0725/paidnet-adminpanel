import { URLS } from "@/constants/router";
import Link from "next/link";
import { FC } from "react";


interface Props {

}

const Sidebar:FC<Props> = () => {
  return (
    <div className="lg:min-w-[250px] lg:h-full h-[50px] bg-paper rounded-xl">
      <div className="flex flex-row lg:flex-col lg:items-start items-center gap-4 pl-[30px] lg:mt-[100px] text-slate-300">
        <Link href={URLS.projects}>
          Projects
        </Link>
        <Link href={URLS.collaborators}>
          Collaborators
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;