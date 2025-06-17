import Footer from "../components/Footer";
import './Contact.css'

function Contact() {
    return (
        <>
            <section className="contact" aria-labelledby="contact-heading">
                <div className="container">
                    <h1 className="">Contact</h1>
                    <div className="cv-container d-flex flex-row" role="group" aria-label="Descarga de currículum">
                        <div className="cv-box">
                            <a 
                                href="/pdfs/CV-PaolaSalazar-2025_esp.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="cv-download-btn"
                                aria-label="Descargar CV en español en formato PDF">
                                
                                Descargar CV (ES)
                            </a>
                        </div>
                        <div className="cv-box">
                            <a 
                                href="/pdfs/CV-PaolaSalazar-2025_eng.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="cv-download-btn"
                                aria-label="Download resume in English in PDF format">
                                Download CV (EN)
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact