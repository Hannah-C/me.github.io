import React from "react";

const ProjectTag = ({
  name,
  onClick,
  isSelected,
}: {
  name: string;
  onClick: any;
  isSelected: boolean;
}) => {
  const buttonStyles = isSelected
    ? "text-white border-purple-500"
    : "text-hannahs-text border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-2 text-md cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
