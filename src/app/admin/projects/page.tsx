"use client"

import { PageContext } from "@/hooks/provider";
import { poolService } from "@/services/api.service";
import { Project } from "@/types";
import { useCallback, useContext, useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import { ArrowPathIcon, CheckIcon, EyeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Checkbox, Input, Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { PROJECT_PROPS } from "@/constants/data";
import ProjectCard from "@/components/ProjectCard";



const ProjectsPage = () => {
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [visibleProps, setVisibleProps] = useState<string[]>([]);
  const { setPageName } = useContext(PageContext);
  setPageName('Projects');

  const getProjects = async () => {
    const res = await poolService.getPools();
    setProjectList(res);
  }

  useEffect(() => {
    getProjects();
    const props = localStorage.getItem('props');
    if (!!JSON.parse(props as string)) {
      setVisibleProps(JSON.parse(props as string));
    } else {
      setVisibleProps(['account', 'brand', 'name', 'mintAddr'])
    }
  }, []);

  const handleSelectProp = useCallback((prop: string) => {
    const index = visibleProps.findIndex(item => item === prop);
    let temp = [...visibleProps];
    if (index !== -1) {
      temp.splice(index, 1);
    } else {
      temp.push(prop);
    }
    setVisibleProps(temp);
    localStorage.setItem('props', JSON.stringify(temp));
  }, [visibleProps, setVisibleProps])

  return (
    <div className="w-full p-4">
      <div className="flex justify-end gap-4 container mt-5 items-center">
        <div className="relative">
          <Input
            placeholder="Search prject name"
            className="lg:w-[300px] w-full h-[40px] rounded-md pl-[40px]"
          />
          <MagnifyingGlassIcon className="size-6 absolute left-2 top-1/2 -translate-y-1/2" />
        </div>
        <Popover>
          <PopoverButton>
            <EyeIcon className="size-6 cursor-pointer" />
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y mt-5 h-[300px] overflow-y-scroll divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              {
                PROJECT_PROPS.map((prop, i) => (
                  <a key={i} className="block rounded-lg py-2 px-3 transition hover:bg-white/5 flex gap-2" href="#">
                    <Checkbox
                      checked={visibleProps.includes(prop.prop)}
                      onChange={() => handleSelectProp(prop.prop)}
                      className="group size-6 rounded-md bg-white/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-white"
                    >
                      <CheckIcon className="hidden size-4 fill-black group-data-[checked]:block" />
                    </Checkbox>
                    <p className="font-semibold text-white">{prop.name}</p>
                  </a>
                ))
              }
            </div>
          </PopoverPanel>
        </Popover>

        <ArrowPathIcon className="size-6 cursor-pointer" />
      </div>
      <div className="w-full overflow-auto flex flex-col gap-4 mt-4">
        <TableHeader visibleProps={visibleProps}/>
        {
          projectList.map((project, i) => (
            <ProjectCard key={i} project={project} visibleProps={visibleProps}/>
          ))
        }
      </div>
    </div>
  );
}

export default ProjectsPage;