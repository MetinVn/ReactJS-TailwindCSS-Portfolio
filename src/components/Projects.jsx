import ProjectItems from "./ProjectItems";
import { projects } from "../data/ProjectsData.jsx";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Projects = () => {
  return (
    <>
      <div className="w-full mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-500">
          My Projects
        </h1>
        <VerticalTimeline lineColor="yellow" layout="1-column">
          {projects.map((project, index) => (
            <VerticalTimelineElement
              key={index}
              date={project.year}
              iconStyle={{ color: "#fff" }}
              contentStyle={{
                color: "#fff",
                backgroundColor: "transparent",
                padding: "0",
              }}
              contentArrowStyle={{
                borderRight: "12px solid  rgb(255, 255, 255)",
              }}>
              <ProjectItems {...project} />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Projects;
