import { useState, type HTMLAttributes } from "react";
import Button from "../button/button";
import Card from "../card/card";
import './projectCard.css'
import Modal from "../modal/modal";

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
    projectName: string;
    briefDescription: string;
    link: string;
    detailedDescription: string;
    imageUrl?: string;
    imageAlt?: string;
}

function ProjectCard({
    projectName,
    briefDescription,
    link,
    detailedDescription,
    imageUrl,
    imageAlt = `${projectName} screenshot`,
    ...props
}: ProjectCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLearnClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Card {...props}>
                <div className="project-card-content">
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
                        {briefDescription}
                    </p>

                    <div className="project-actions">
                        <Button onClick={handleLearnClick}>
                            Learn More
                        </Button>
                    </div>

                    {imageUrl && (
                        <div className="project-image-container">
                            <img
                                src={imageUrl}
                                alt={imageAlt}
                                className="project-image"
                            />
                        </div>
                    )}
                </div>
            </Card>

            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title={projectName}
            >
                <div className="project-modal-content">

                    <p>{detailedDescription || briefDescription}</p>

                    {imageUrl && (
                        <div className="modal-image-container">
                            <img
                                src={imageUrl}
                                alt={imageAlt}
                                className="modal-image"
                            />
                        </div>
                    )}


                    <div className="modal-actions" style={{ marginTop: '2rem' }}>
                        <Button
                            onClick={() => window.open(link, '_blank')}
                        >
                            <i className="fa-brands fa-github" />
                            &nbsp;View on GitHub
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ProjectCard;
