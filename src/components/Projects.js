import React from "react";

//render any image inside the project container
const renderImage = (src, alt) => {
  return <img src={src} alt={alt} />;
};

//render a project title
const renderTitle = (title) => {
  return <h3>{title}</h3>;
};

//render a project description
const renderDescription = (description) => {
  return <p>{description}</p>;
};

//render links to a project's code and website
const renderProjectLink = (gitLink, siteLink) => {
  return (
    <div className="project-links">
      <a
        className="button"
        href={gitLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Code
      </a>
      <a
        className="button"
        href={siteLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Website
      </a>
    </div>
  );
};

const renderProject = (
  siteLink,
  image,
  imageAlt,
  projectNum,
  title,
  descrip,
  codeLink
) => {
  return (
    <div className="project-container-inner">
      <div className="project-image">
        <a
          target="_blank"
          href={siteLink}
          rel="noopener noreferrer"
          className="image-link-overlay"
        >
          <div className="filter">{renderImage(image, imageAlt)}</div>
        </a>
      </div>

      <div className="project-title-and-description">
        <div className="project-number">{renderImage(projectNum, "")}</div>
        <div className="project-title">{renderTitle(title)}</div>

        <div className="project-description">{renderDescription(descrip)}</div>

        {renderProjectLink(codeLink, siteLink)}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <div className="margin-container">
        <div className="strokes">
          <div className="h2-heading">
            <div className="heading-and-image">
              <h2>Recent Projects</h2>
            </div>
          </div>

          <div className="projects">
            <div className="project-container">
              {renderProject(
                "https://defg-cloud-hosting-website.netlify.app/",
                "/image/defg.png",
                "Project one",
                "/image/one-stroke.png",
                "Cloud Hosting Platform",
                `
                        A cloud hosting platform deployed on Netlify, featuring responsive design and
optimized performance.
                        `,
                "https://github.com/ChrisRoland/DEFG"
              )}
            </div>

            <div className="project-container">
              {renderProject(
                "https://seiviour.xyz",
                "/image/SEIviour.png",
                "Project one",
                "/image/one-stroke.png",
                "Token Website",
                `
                        A simple website for SEIvour token deployed on the SEI network. Built with React and
TailwindCSS and hosted on a custom domain.
                        `,
                "https://github.com/ChrisRoland/seivour"
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Articles */}
      <div className="margin-container">
        <div className="strokes">
          <div className="h2-heading">
            <div className="heading-and-image">
              <h2>Recent Articles</h2>
            </div>
          </div>

          <div className="projects">
            <div className="project-container">
              {renderProject(
                "https://medium.com/@chrisebuberoland/static-site-generation-ssg-vs-server-side-rendering-in-next-js-debf43f4bb7f",
                "/image/ssgssr.png",
                "article one",
                "/image/one-stroke.png",
                "SSG vs SSR in Next.js",
                `
                        As a web developer, the way you render your web pages determines your site’s performance and its general user experience. With Next.js, a popular React framework, you can choose between the two popular rendering techniques: — Static Site Generation (SSG) or Server Side Rendering (SSR).
                        `,
              )}
            </div>

            <div className="project-container">
              {renderProject(
                "https://www.turing.com/blog/javascript-fetch-api-guide",
                "/image/fetch.png",
                "article two",
                "/image/one-stroke.png",
                "JavaScript Fetch API",
                `
                        With the fetch function in JavaScript, we can make simple API calls, a simple GET request with fetch, and a POST request where we need to pass along certain other parameters, including a configuration object effortlessly.
                        `,
                "https://github.com/PraiseImmanuel/advice-web-app"
              )}
            </div>

            <div className="projects">
              <div className="project-container">
                {renderProject(
                  "https://metabnb-praise.netlify.app/",
                  "/image/metabnb-praise-netlify-app.jpg",
                  "Project two",
                  "/image/one-stroke.png",
                  "Metabnb",
                  `
                                    Metabnb offers living spaces within the metaverse
                                    to users, interested in exploring virtual worlds.
                        `,
                  "https://github.com/PraiseImmanuel/metabnb"
                )}
              </div>

              <div className="project-container">
                {renderProject(
                  "https://praiseimmanuel.github.io/ecommerce-product/",
                  "/image/project2.jpg",
                  "Project two",
                  "/image/two-stroke.png",
                  "E-commerce website",
                  `
                        A website showcasing 
                        products for sale developed with vanila javascript.
                        `,
                  "https://github.com/PraiseImmanuel/ecommerce-product"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
