import projectInfo from "./siteContent.js";

//props = project info object
export default function ProjectPage(props) {
  return <h1>Project Name {props.name}</h1>;
}
