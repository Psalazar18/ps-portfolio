import './Experience.css';
import ExperienceDropdown from '../components/ExperienceDropdown';
import ExperienceList from './ExperienceList';

function Experience() {
    return (
        <section className="experience-section">
            <ExperienceDropdown
                title="Web UI Developer"
                summary="Oportunidades que me impulsaron, desafíos que me formaron. Esta es mi historia en desarrollo web."
                type="web"
            >
                <ExperienceList type="web" />
            </ExperienceDropdown>
            <ExperienceDropdown
                title="Otras experiencias profesionales"
                summary="Una trayectoria complementaria al desarrollo que me llevaron a mejorar habilidades esenciales más allá del código"
                type="other"
            >
                <ExperienceList type="other"/>
            </ExperienceDropdown>
        </section>
    );
}

export default Experience;