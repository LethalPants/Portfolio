import React from "react"
import ProjectItemStyles from "./Projectitem.module.scss"
import PropTypes from "prop-types"

const WorkItem = ({ title, description, link, date }) => {
  return (
    <div className={ProjectItemStyles.content}>
      <div className={ProjectItemStyles.contentHeader}>
        <h6>{title}</h6>
        {date ? <span>{date}</span> : null}
      </div>
      <div>
        <p className={ProjectItemStyles.contentBody}>{description}</p>
        {link ? (
          <a
            href={`${link}`}
            className={ProjectItemStyles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        ) : null}
      </div>
    </div>
  )
}

WorkItem.propTypes = {
  tittle: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
}

export default WorkItem
