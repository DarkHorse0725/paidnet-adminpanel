import { PROJECT_PROPS } from "@/constants/data";
import { FC } from "react";


interface Props {
  visibleProps: string[];
}

const TableHeader:FC<Props> = ({visibleProps}) => {
  return (
    <div className="bg-slate-700 h-[60px] flex gap-4 items-center overflow-clip px-4">
      {
        PROJECT_PROPS.map((prop, i) => 
          visibleProps.includes(prop.prop) &&
          (
          <div
            key={i}
            className="w-[150px] max-w-[150px]"
          >
            { prop.name }
          </div>
        ))
      }
    </div>
  );
}

export default TableHeader;