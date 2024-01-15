"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Responsive Portfolio Website using Next and Typescript. Constantly being improved! Upcoming feature: email contacting via website with resend api.",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Hannah-C/Hannah-C.github.io",
    previewUrl: "https://github.com/Hannah-C/Hannah-C.github.io",
  },
  {
    id: 2,
    title: "Drawdle",
    description: "Drawing Game where Drawdle (BLiP api) guess your drawing! This was my first ever project using React and was completed over the span of TWO DAYS!",
    image: "/images/projects/Drawdle.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/odis43/Drawdle",
    previewUrl: "https://drawdle.vercel.app/",
  },
  {
    id: 3,
    title: "Eye'm Hungry",
    description: "Eye tracking game that uses AdHawk MiniLink glasses to move and control characters on the screen. Was In participation of HTN2023.",
    image: "/images/projects/EyemHungry.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ryannhu/eyemhungry",
    previewUrl: "https://github.com/ryannhu/eyemhungry",
  },
  {
    id: 4,
    title: "Number Akinator",
    description: "A cross-platform number guessing game created using react native and expo.",
    image: "/images/projects/adaptive-icon.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Hannah-C/NumberAkinator",
    previewUrl: "https://github.com/Hannah-C/NumberAkinator",
  },
  {
    id: 5,
    title: "First Portfolio Website",
    description: "Created Using basic html and css while playing around with hovering features.",
    image: "/images/projects/me.png",
    tag: ["All", "Web", "mobile"],
    gitUrl: "https://github.com/Hannah-C/me.github.io",
    previewUrl: "https://hannah-c.vercel.app/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => {
    return project.tag.includes(tag);
  });
  

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag 
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag 
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag 
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgURL={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
