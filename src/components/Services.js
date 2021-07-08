import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="Links" />
      <div className="section-center services-center">
        {services.map(service => {
          const { id, title, icon, text, link } = service
          return (
            <a href={link} alt="links">
              <article key={id} className="service">
                {icon}
                <h4>{title}</h4>
                <div className="underline"></div>
                <p>{text}</p>
              </article>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Services
