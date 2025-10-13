import type { HTMLAttributes } from "react";
import Button from "../button/button";
import Card from "../card/card";
import './projectCard.css'

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
    projectName: string;
    description: string;
    link: string;
}

function ProjectCard({ projectName, description, link, ...props }: ProjectCardProps) {
    return (
        <Card {...props}>
            <a
                className="project-link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2>
                    <i className="fa-brands fa-github" />
                    &nbsp;
                    {projectName}
                </h2>
            </a>

            <p>
                {description}
            </p>

            <Button>
                Learn
            </Button>
        </Card>
    )
}
export default ProjectCard;
