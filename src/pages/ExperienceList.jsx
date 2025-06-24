import { useEffect, useState } from 'react';
import './ExperienceList.css'

const ExperienceList = ({ type, isMobile }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                const response = await fetch('/data/experiences.json');
                const result = await response.json();
                const filtered = result.filter((item) => item.type === type);
                setData(filtered);
            } catch (error) {
                console.error('Error al cargar datos de experiencia:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchExperience();
    }, [type]);

    if (loading) return <p>Cargando experiencia...</p>;

    return (
        <ul className={`experience-list ${type}`}>
            {data.map((exp) => (
                <li key={exp.id} className="experience-item">
                    <div className="timeline-marker" aria-hidden="true" />
                    <div className="experience-main">
                        <div className='experience-header'>
                            <h4>
                                {exp.company} - <span>{exp.role}</span>
                            </h4>
                            <p className="experience-meta">
                                {exp.location} | {exp.period}
                            </p>
                        </div>

                        <div className={`experience-details ${isMobile ? 'show' : ''}`}>
                            <ul className="experience-description">
                                {exp.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <div className="experience-skills">
                                {exp.skills.map((skill, idx) => (
                                    <span key={idx} className="badge">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ExperienceList;

