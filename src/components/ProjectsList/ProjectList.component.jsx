import React from "react"
import ProjectItem from "../ProjectItem/ProjectItem.component"
import ProjectsJSON from "../../content/projects.json"

const ProjectList = () => {
  return ProjectsJSON.projects.map(
    ({ title, description, link, date }, index) => (
      <ProjectItem
        title={title}
        description={description}
        link={link}
        date={date}
        key={index}
      />
    )
  )
}

export default ProjectList
