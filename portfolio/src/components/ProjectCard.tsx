import React from "react";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { DiCode } from "react-icons/di";
const ProjectCard = ({
  imgURL,
  title,
  description,
  gitUrl,
  previewUrl,
}: {
  imgURL: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgURL})`, backgroundSize: `cover` }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link href={gitUrl} className="h-14 w-14 relative rounded-full">
            <DiCode className="h-10 w-10 text-hannahs-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer hover:text-white" />
          </Link>
          <Link href={previewUrl} className="h-14 w-14 relative rounded-full">
            <FaEye className="h-9 w-9 text-hannahs-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-hannahs-colour-2 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-hannahs-text">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
