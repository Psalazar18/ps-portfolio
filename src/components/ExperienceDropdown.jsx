import React, { useState, useEffect } from 'react';
import './ExperienceDropdown.css'

const ExperienceSection = ({ title, summary, type, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const shouldShowSummary = isHovered || isMobile;

    return (
        <section
            className={`experience-dropdown ${type === "web" ? "web-ui" : "other-exp"}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button
                className="dropdown-container"
                onClick={handleToggle}
                aria-expanded={isOpen}
                aria-controls={`panel-${title.replace(/\s+/g, '-').toLowerCase()}`}
                id={`dropdown-${title.replace(/\s+/g, '-').toLowerCase()}`}
            >
                <div className="dropdown-texts">
                    <h2>{title}</h2>
                    {shouldShowSummary && <p className="summary">{summary}</p>}
                </div>
                <div className="dropdown-arrow" aria-hidden="true">
                    {isOpen ? '▲' : '▼'}
                </div>
            </button>

            {isOpen && (
                <div
                    id={`panel-${title.replace(/\s+/g, '-').toLowerCase()}`}
                    className="dropdown-content"
                    role="region"
                    aria-labelledby={`dropdown-${title.replace(/\s+/g, '-').toLowerCase()}`}
                >
                    {children}
                </div>
            )}
        </section>
    );
};

export default ExperienceSection;
