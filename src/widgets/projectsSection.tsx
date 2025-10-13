import ProjectCard from "../shared/projectCard/projectCard";

function ProjectsSection({ ...props }) {
    return (
        <section className="grid-container" {...props}>
            <ProjectCard projectName={"Test project"} description={"Test description"} link={""} />
            <ProjectCard projectName={"Test project"} description={"Test description"} link={""} />
            <div className="wide-row">
                <ProjectCard projectName={"Test project"} description={"Test description"} link={""} />
            </div>
            <ProjectCard projectName={"Test project"} description={"Test description"} link={""} />
            <ProjectCard projectName={"Test project"} description={"Test description"} link={""} />
        </section>
    )
}

export default ProjectsSection;
