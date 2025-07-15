import { Trophy } from "lucide-react";
import React from "react";

const ComingChampList = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="shadow-lg w-full p-4 bg-white rounded-md">
      <div className="flex gap-x-2 text-blue-900  items-center py-2 transition-all duration-150">
        <Trophy className="md:w-8 md:h-8" />
        <h1 className="text-lg md:text-xl font-medium tracking-wider">
          Prochains compétitions...
        </h1>
      </div>
      <div>
        {children ? (
          children
        ) : (
          <p className="w-full flex p-4 px-6 md:text-lg text-sm tracking-wider items-center text-gray-800">
            Aucun Compétitions à venir...
          </p>
        )}
      </div>
    </div>
  );
};

export default ComingChampList;
