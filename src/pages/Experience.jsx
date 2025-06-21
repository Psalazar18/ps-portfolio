import './Experience.css';
import ExperienceDropdown from '../components/ExperienceDropdown';

function Experience() {
    return (
        <section className="experience-section">
            <ExperienceDropdown
                title="Web UI Developer"
                summary="Desarrollo de interfaces con React y Vue. Mejora de rendimiento y accesibilidad."
                type="web"
            />
            <ExperienceDropdown
                title="Otras experiencias profesionales"
                summary="Gestión de agendas, atención al cliente y soporte remoto."
                type="other"
            />
        </section>
    );
}

export default Experience;