import { Project } from "@/types";
import { FC } from "react";



interface Props {
  project: Project;
  visibleProps: string[];
}

const ProjectCard: FC<Props> = ({ project, visibleProps }) => {
  return (
    <div className="bg-slate-700 h-[60px] flex gap-4 items-center overflow-clip px-4 rounded-xl text-slate-300">
      {
        visibleProps.includes('pubkey') && (
          <div className="w-[150px] truncate">{project.pubkey}</div>
        )
      }
      {
        visibleProps.includes('brand') && (
          <div className="w-[150px] truncate">{project.brand}</div>
        )
      }
      {
        visibleProps.includes('name') && (
          <div className="w-[150px] truncate">{project.name}</div>
        )
      }
      {
        visibleProps.includes('slug') && (
          <div className="w-[150px] truncate">{project.slug}</div>
        )
      }
      {
        visibleProps.includes('shortBio') && (
          <div className="w-[150px] truncate">{project.shortBio}</div>
        )
      }
      {
        visibleProps.includes('description') && (
          <div className="w-[150px] truncate">{project.description}</div>
        )
      }
      {
        visibleProps.includes('currency') && (
          <div className="w-[150px] truncate">{project.currency}</div>
        )
      }
      {
        visibleProps.includes('totalRaise') && (
          <div className="w-[150px] truncate">{`${project.totalRaise}$`}</div>
        )
      }
      {
        visibleProps.includes('mint') && (
          <div className="w-[150px] truncate">{project.mint}</div>
        )
      }
      {
        visibleProps.includes('price') && (
          <div className="w-[150px] truncate">{`${project.price}$`}$</div>
        )
      }
      {
        visibleProps.includes('tgeDate') && (
          <div className="w-[150px] truncate">{project.tgeDate}</div>
        )
      }
    </div>
  );
}

export default ProjectCard;