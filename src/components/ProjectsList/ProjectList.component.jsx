import React from "react"

import ProjectItem from "../ProjectItem/ProjectItem.component"

const ProjectList = () => {
  const Projects = [
    {
      title: `tia`,
      description: `Developed a centralized web-based solution for stock-management and invoicing for a local business based in kuwait.`,
      link: `https://github.com/LethalPants/TIA`,
    },
    {
      title: `reviewd`,
      description: `Reviewd, is a video game review aggregator which brings the top critics in gaming all in one place. The reviews are collected from the top publications in gaming such as IGN, GameSpot, Polygon, and Eurogamer.`,
      link: `https://github.com/LethalPants/reviewd`,
    },
    {
      title: `ats`,
      description: `A social media app for the alumni of colleges under the Directorate of Higher Education, Goa. Built in Java for Smart India Hackathon.`,
    },
  ]

  return Projects.map(({ title, description, link }, index) => (
    <ProjectItem
      title={title}
      description={description}
      link={link}
      key={index}
    />
  ))
}

export default ProjectList
