import { useEffect, useState } from 'react';
import './ExperienceList.css'

const ExperienceList = ({ type }) => {
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
    <ul className="experience-list">
      {data.map((exp) => (
        <li key={exp.id} className="experience-item">
          <h4>{exp.role} - <span>{exp.company}</span></h4>
          <p className="experience-meta">{exp.location} | {exp.period}</p>
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
        </li>
      ))}
    </ul>
  );
};

export default ExperienceList;

