"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const FaqItem = ({ ques, ans }: { ques: string; ans: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full mx-auto border-b-[0.5] border-[#C3C3C3] py-4">
      <div
        className="flex justify-between items-center cursor-pointer "
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-white text-sm md:text-xl font-semibold font-geometric">
          {ques}
        </h3>
        {open ? (
          <Minus className="text-white w-5 h-5 md:font-extrabold" />
        ) : (
          <Plus className="text-white w-5 h-5 md:font-extrabold" />
        )}
      </div>
      {open && (
        <p className="text-white mt-2 font-avenir text-xs md:text-base">
          {ans}
        </p>
      )}
    </div>
  );
};

export default FaqItem;
