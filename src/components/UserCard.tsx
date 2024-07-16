import { User } from "@/types";
import { FC } from "react";


interface Props {
  user: User;
}

const UserCard:FC<Props> = ({user}) => {
  return (
    <div className="bg-slate-700 h-[60px] flex gap-4 items-center overflow-clip px-4 rounded-xl text-slate-300 w-full">
      <div>{user.email}</div>
      <div>{user.firstName}</div>
      <div>{user.lastName}</div>
    </div>
  );
}

export default UserCard;