import {useState, type HTMLAttributes, type ReactNode} from "react";
import Button from "../button/button";
import Card from "../card/card";
import './projectCard.css'
import Modal from "../modal/modal";

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
    projectName: string;
    briefDescription: string;
    link: string;
    detailedDescription: ReactNode;
    imageUrl?: string;
    imageAlt?: string;
    techTags?: string[];
}

function ProjectCard({
    projectName,
    briefDescription,
    link,
    detailedDescription,
    imageUrl,
    imageAlt = `${projectName} screenshot`,
    techTags,
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
                        <h2 className="project-title">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                            {projectName}
                        </h2>
                    </a>

                    <p>
                        {briefDescription}
                    </p>

                    {techTags && techTags.length > 0 && (
                        <div className="tech-tags">
                            {techTags.map(tag => (
                                <span key={tag} className="tech-tag">{tag}</span>
                            ))}
                        </div>
                    )}

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
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: 'middle', marginRight: '0.3rem' }}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                            View on GitHub
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ProjectCard;
