"use client"

import { PageContext } from "@/hooks/provider";
import { useContext } from "react";

const CollaboratorsPage = () => {
  const { setPageName } = useContext(PageContext);
  setPageName("Collaborators")
  return (
    <div></div>
  );
}

export default CollaboratorsPage;