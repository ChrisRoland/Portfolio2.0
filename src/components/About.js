import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="about-container margin-container">
        <div className="strokes">
          <div className="h2-heading">
            <div className="heading-and-image">
              <h2>About Me</h2>
            </div>
          </div>

          <div className="about-box-and-image">
            <div className="about-box-border">
              <div className="about-box">
                <p>
                  Hello there! 👋, I'm Chris Ebube Roland, a dedicated Software
                  Engineer, Technical Writer, and Open Source evangelist. I am
                  fascinated with the Tech Development world and am dedicated to
                  learning more about programming, software engineering, and
                  computer science. I am efficient with Shell Navigation,
                  HTML, CSS, Tailwind, JS,TS, NextJs and React. I enjoy sharing my
                  knowledge with the tech community and the world at large
                  through my articles. As a developer who is driven, curious,
                  and committed to creating high-quality code I am constantly
                  seeking new challenges and opportunities to learn new
                  technologies. I believe that by embracing new technologies, we
                  can create innovative solutions that can change the world for
                  the better. Let's connect and work together to build awesome
                  projects
                </p>
              </div>
            </div>

            <div className="about-img">
              <img src="/image/about-img-alt.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
