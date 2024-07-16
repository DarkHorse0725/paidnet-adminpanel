"use client"

import UserCard from "@/components/UserCard";
import { PageContext } from "@/hooks/provider";
import { userService } from "@/services/api.service";
import { User } from "@/types";
import { useCallback, useContext, useEffect, useState } from "react";

const CollaboratorsPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { setPageName } = useContext(PageContext);
  setPageName("Collaborators");

  const getCollaborators = useCallback(async () => {
    const res = await userService.getCollaborators();
    console.log(res)
    setUsers(res);
  }, []);

  useEffect(() => {
    getCollaborators();
  }, []);
  return (
    <div className="w-full p-4">
      <div className="flex justify-end gap-4 container mt-5 items-center">
        {
          users.map((user, i) => (
            <UserCard key={i} user={user}/>
          ))
        }
      </div>
    </div>
  );
}

export default CollaboratorsPage;