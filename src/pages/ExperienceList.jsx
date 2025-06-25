import { useEffect, useState } from 'react';
import './ExperienceList.css'

const ExperienceList = ({ type, isMobile }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openItems, setOpenItems] = useState({});

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

    const toggleItem = (id) => {
        setOpenItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    if (loading) return <p>Cargando experiencia...</p>;

    return (
        <ul className={`experience-list ${type}`}>
            {data.map((exp) => (
                <li key={exp.id} className="experience-item">
                    <button
                        className={`timeline-marker ${openItems[exp.id] ? 'active' : ''}`}
                        onClick={() => toggleItem(exp.id)}
                        aria-expanded={openItems[exp.id] || isMobile}
                        aria-controls={`details-${exp.id}`}
                    >
                        <span className="visually-hidden">
                            {openItems[exp.id] ? 'Ocultar detalles de experiencia' : 'Ver detalles de experiencia'}
                        </span>
                    </button>
                    {/* <div className="timeline-marker" aria-hidden="true" /> */}
                    <div className="experience-main">
                        <div className='experience-header'>
                            <h3>
                                {exp.company} - <span>{exp.role}</span>
                            </h3>
                            <p className="experience-meta">
                                {exp.location} | {exp.period}
                            </p>
                        </div>

                        <div
                            className={`experience-details ${isMobile || openItems[exp.id] ? 'show' : ''}`}
                            id={`details-${exp.id}`}
                        >
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
            ))
            }
        </ul >
    );
};

export default ExperienceList;

