import React from "react"
import { FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { BsCodeSlash } from "react-icons/bs"
const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/sparshg22/",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/sparsh229",
  },
  {
    id: 3,
    icon: <BsCodeSlash className="social-icon"></BsCodeSlash>,
    url: "https://leetcode.com/sparsh229/",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
