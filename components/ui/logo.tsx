import { Omega } from "lucide-react";
import React from "react";

export const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="text-white size-7 rounded-xs bg-black flex items-center justify-center font-bold">
        <Omega size={18} />
      </div>
      <span className="font-bold">Αθηνά</span>
    </div>
  );
};
