import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className='container-fluid'>
                    <div className='footer-icons d-flex justify-content-center align-items-center text-center'>
                        <a href="https://github.com/Psalazar18" target="_blank" rel="noopener noreferrer" aria-label="Ir a GitHub de Paola Salazar"
        title="GitHub">
                            <i className="bi bi-github fs-2" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/paola-salazar-7b3995156/" target="_blank" rel="noopener noreferrer"  aria-label="Ir a LinkedIn de Paola Salazar"
        title="LinkedIn">
                            <i className="bi bi-linkedin fs-2" aria-hidden="true"></i>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&to=paolasalazar90@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Enviar correo a Paola Salazar"
        title="Email">
                            <i className="bi bi-envelope fs-2" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer