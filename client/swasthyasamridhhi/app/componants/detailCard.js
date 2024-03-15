import { Divide } from "lucide-react";
import React, { ReactNode } from "react";

function DetailCard(props){
  return(
    <div>
      <div className="flex flex-col m-5 lg:w-72 md:w-auto rounded-lg border-gray-400 border-[1px] h-30 bg-slate-50 shadow-sm">
        <div className=" text-black p-2 pl-3 text-sm">{props.name}</div>
        <div className="p-2 pt-0 text-2xl">{props.count}</div>
        <div className="p-4 pt-0 text-[12px]">{props.lastmonth}</div>
    </div>
  </div>
  )
}

export default DetailCard;
