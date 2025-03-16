"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Amazon Clone",
    description: "Amazon clone showcasing responsive design using only HTML and CSS.",
    image: "projects/1.jpeg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "https://amazon-clone-opal-seven.vercel.app/",
  },
  {
    id: 2,
    title: "Youtube Clone",
    description: "Youtube clone showcasing responsive design using only HTML and CSS.",
    image: "projects/2.jpeg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "https://youtube-ui-lemon.vercel.app/",
  },
  {
    id: 3,
    title: "Static Resume",
    description: 
    " Static resume built using HTML, CSS, and TypeScript.",
    image: "projects/3.jpeg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "https://milestone2bylaiba.vercel.app/",
  },
  {
    id: 4,
    title: "Dynamic Resume Builder",
    description: "Built with HTML, CSS, and TypeScript for dynamic user experiences.",
    image: "projects/4.jpeg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "https://laibasdynamicresume.vercel.app/",
  },
  {
    id: 5,
    title: "Blog Website",
    description: "Built with Tailwind CSS, Next js, Sanity and TypeScript for dynamic user experiences.",
    image: "projects/5.jpeg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "https://sanity-blog-website-three.vercel.app/",
  },
  {
    id: 5,
    title: "Ecommerce Website",
    description: "Built with Tailwind CSS, Next js, Sanity and TypeScript for dynamic user experiences.",
    image: "projects/6.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl:"https://zylen-ecom-website-fchfemotc-laiba-jaweds-projects.vercel.app/",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag:string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
