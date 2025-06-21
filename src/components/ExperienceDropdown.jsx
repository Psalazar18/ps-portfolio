import { useState, useEffect } from 'react';
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
            <div className="dropdown-container" onClick={handleToggle}>
                <div className="dropdown-texts">
                    <h2>{title}</h2>
                    {shouldShowSummary && (
                        <p>{summary}</p>
                    )}
                </div>
                <div className="dropdown-arrow">{isOpen ? "▲" : "▼"}</div>
            </div>

            {isOpen && (
                <div className="dropdown-content">
                    {children}
                </div>
            )}
        </section>
    );
};

export default ExperienceSection;
